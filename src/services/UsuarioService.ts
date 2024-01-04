import { UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioService{


    usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository = new UsuarioRepository()){
        this.usuarioRepository = usuarioRepository;
    }

}