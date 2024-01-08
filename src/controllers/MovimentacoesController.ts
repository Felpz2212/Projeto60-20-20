import { Request, Response } from "express";
import { MovimentacoesService } from "../services/MovimentacoesService";
import { Movimentacao } from "../entities/Movimentacao";

export class MovimentacoesController {


    movimentacoesService: MovimentacoesService;

    constructor(
        movimentacoesService = new MovimentacoesService()
    ) {
        this.movimentacoesService = movimentacoesService
    }

    getAllMovimentacoes = async (request: Request, response: Response) => {

        try {
            const result = await this.movimentacoesService.getAllMovimentacoes()

            return response.status(200).json(result);
        } catch (error) {
            response.status(500).json({
                message: "Um erro inesperado aconteceu no servidor! por favor entre em contato com os administradores"
            })
        }
    }

}