import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { TipoMov } from "../entities/TipoMov";

export class TipoRepository {


    manager: EntityManager;

    constructor(
        manager = AppDataSource.manager
    ){
        this.manager = manager;
    }


    findByid = async (tipo_id: string): Promise<TipoMov | null> => {

        return await this.manager.findOneBy(TipoMov, {
            tipo_id
        })
    }
}