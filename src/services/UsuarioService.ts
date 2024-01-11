import { UsuarioEditDTO } from "../DTO/UsuarioDTO/UsuarioEditDTO";
import { User } from "../entities/User";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { MD5 } from 'crypto-js';

export class UsuarioService {
    
    usuarioRepository: UsuarioRepository;
    
    constructor(
        usuarioRepository = new UsuarioRepository()
    ){
        this.usuarioRepository = usuarioRepository;
    }


    createUser = async (nome: string, email: string, password: string, renda_mensal: number): Promise<Partial<User> | undefined> => {
        const user_db = await this.usuarioRepository.findByEmail(email);
        
        if(user_db){
            return undefined;
        }
        let pass = MD5(password);
        let user = new User(nome, email, pass.toString(), renda_mensal);

        user = await this.usuarioRepository.createUser(user) as User;

        const {password: _ , ...userData} = user

        return userData;
    }

    updateUser = async (user_id: string, data: UsuarioEditDTO): Promise<Partial<User> | undefined> => {

        const user = await this.usuarioRepository.findById(user_id);

        if(!user){
            return undefined
        }

        if(data.password){
            let pass = MD5(data.password);
            data.password = pass.toString();
        }

        const response = await this.usuarioRepository.updateUser(user, data);

        const { password: _, ...userData } = response as User;
        
        return userData;
    };

    findById = async (user_id: string): Promise<User | undefined> => {

        return await this.usuarioRepository.findById(user_id);
    }
}
