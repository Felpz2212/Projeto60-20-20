import { User } from "../entities/User";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { MD5 } from 'crypto-js';

export class LoginService {


    usuarioRepository: UsuarioRepository;

    constructor(
        usuarioRepository = new UsuarioRepository()
    ){
        this.usuarioRepository = usuarioRepository;
    }

    login = async (email: string, senha: string): Promise<Partial<User> | undefined> => {

        let user;
        user = await this.usuarioRepository.findByEmail(email);

        if(!user){
            return undefined;
        }

        senha = MD5(senha).toString();

        if(user.password != senha){
            return undefined
        }

        const {password: _ , ...userData} = user

        return userData;
    }
}