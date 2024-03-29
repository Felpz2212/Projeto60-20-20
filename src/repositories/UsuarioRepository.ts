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

    createUser = async (user: User):  Promise<User | undefined> => {
        const response = await this.manager.save(user);
        return response;
    }

    updateUser = async (user: User, dataUpdate: UsuarioEditDTO):  Promise<User | undefined> => {

        Object.assign(user, dataUpdate);
        await this.manager.update(User, user.user_id, user);
        return user;
    }

    findById = async (user_id: string):  Promise<User | undefined> => {

        const user = await this.manager.findOneBy(User, {user_id});

        if(!user){
            return undefined
        }

        return user;
    }

    findByEmail = async (email: string): Promise<User | null> => {

        return await this.manager.findOneBy(User, {email})
    }
}