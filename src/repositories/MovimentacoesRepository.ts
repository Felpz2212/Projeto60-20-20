import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Movimentacao } from "../entities/Movimentacao";

export class MovimentacoesRepository{


    manager: EntityManager;

    constructor(
        manager = AppDataSource.manager
    ){
        this.manager = manager;
    }

    getAllMovimentacoes = async (): Promise<Movimentacao[] | undefined> => {

        return await this.manager.find(Movimentacao);
    }


    create = async (movimentacao: Movimentacao): Promise<Movimentacao | undefined> => {

        return await this.manager.save(movimentacao);
    }
}