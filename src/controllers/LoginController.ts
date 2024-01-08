import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

export class LoginController {

    loginService: LoginService;

    constructor(
        loginService = new LoginService()
    ) {
        this.loginService = loginService;
    }


    login = async (request: Request, response: Response) => {
        try {
            const { email, password } = request.body;

            const result = await this.loginService.login(email, password);

            if (!result) {
                response.status(400).json({
                    message: 'Bad Request! E-mail ou senha inválidos'
                })
            }

            return response.status(200).json(result);
        } catch (error) {
            response.status(500).json({
                message: 'Um erro inesperado aconteceu no servidor'
            })
        }
    }
}