import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Movimentacao } from "../entities/Movimentacao";
import { TipoMov } from "../entities/TipoMov";

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './src/database/db.sqlite',
    migrations: [
        './src/database/migrations/*.ts'
    ],
    entities: [
        User,
        Movimentacao,
        TipoMov
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
})