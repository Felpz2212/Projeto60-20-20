import { UsuarioCreateDTO } from "../DTO/UsuarioDTO/UsuarioCreateDTO";
import { UsuarioService } from "../services/UsuarioService";



export class UsuarioController{

    usuarioService: UsuarioService;

    constructor(usuarioService = new UsuarioService()){
        this.usuarioService = usuarioService;
    }

    createUser(usuarioDTO: UsuarioCreateDTO){

    }
}