import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { UsuarioEditDTO } from "../DTO/UsuarioDTO/UsuarioEditDTO";

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

    updateUser = async (user: User, dataUpdate: UsuarioEditDTO) => {

        Object.assign(user, dataUpdate);
        await this.manager.update(User, user.user_id, user);
        return user;
    }

    findById = async (user_id: string) => {

        const user = await this.manager.findOneBy(User, {user_id});

        if(!user){
            return undefined
        }

        return user;
    }
}