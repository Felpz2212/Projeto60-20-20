import { Request, Response } from 'express'
import { UsuarioService } from '../services/UsuarioService'
import { UsuarioEditDTO } from '../DTO/UsuarioDTO/UsuarioEditDTO';

export class UsuarioController {
  
    userService: UsuarioService;

    constructor(
        userService = new UsuarioService()
    ){
        this.userService = userService
    }


    createUser = async (request: Request, response: Response) => {
        const body = request.body;

        if(!body.name || !body.email || !body.password){
            return response.status(400).json({
                message: 'Bad Request! Todos os parametros são necessários'
            })
        }

        let name = body.name;
        let email = body.email;
        let password = body.password;

        const result = await this.userService.createUser(name, email, password);
        return response.status(201).json(result);
    }

    updateUser = async (request: Request, response: Response) => {
        const body = request.body;

        if(!body.user_id){
            response.status(400).json({
                message: "Bad Request! user_id não foi informado"
            })
        }

        let newData = new UsuarioEditDTO();
        newData.email = body?.email;
        newData.name = body?.name;
        newData.password = body?.password;

        const result = await this.userService.updateUser(body.user_id, newData);

        response.status(200).json(result)
    }
}