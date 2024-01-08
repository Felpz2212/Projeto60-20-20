import { Movimentacao } from "../entities/Movimentacao";
import { MovimentacoesRepository } from "../repositories/MovimentacoesRepository";

export class MovimentacoesService { 


    movimentacoesRepository: MovimentacoesRepository;

    constructor(
        movimentacoesRepository = new MovimentacoesRepository()
    ){
        this.movimentacoesRepository = movimentacoesRepository;
    }


    getAllMovimentacoes = async (): Promise<Movimentacao[] | undefined> => {

        return await this.movimentacoesRepository.getAllMovimentacoes();
    }   
}