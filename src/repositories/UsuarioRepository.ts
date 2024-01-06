import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entities/User";

export class UsuarioRepository{
    
    manager: EntityManager;

    constructor(
        manager = AppDataSource.manager
    ){
        this.manager = manager
    }

    createUser = async (user: User) => {
        const response = await this.manager.save(user);
        return response;
    }
}