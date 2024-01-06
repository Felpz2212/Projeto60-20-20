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


    createUser = async (nome: string, email: string, password: string) => {
        let pass = MD5(password);
        const user = new User(nome, email, pass.toString());
        
        return await this.usuarioRepository.createUser(user);
    }

    updateUser = async (user_id: string, data: UsuarioEditDTO) => {

        const user = await this.usuarioRepository.findById(user_id);

        if(!user){
            return undefined
        }

        const response = await this.usuarioRepository.updateUser(user, data);

        return response;
    };
}
