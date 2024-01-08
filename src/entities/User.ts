import { randomUUID } from "crypto";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Movimentacao } from "./Movimentacao";

@Entity('users')
export class User{
    
    @PrimaryColumn()
    user_id: string

    @Column({nullable: false})
    name: string
    
    @Column({nullable: false, unique: true})
    email: string

    @Column({nullable: false})
    password: string

    @Column({nullable: false})
    renda_mensal: number

    @OneToMany(() => User, (usuario) => usuario.movimentacoes)
    movimentacoes!: Movimentacao[];

    constructor(
        name: string,
        email: string,
        password: string,
        renda_mensal: number
    ){
        this.user_id = randomUUID();
        this.name = name;
        this.email = email;
        this.password = password
        this.renda_mensal = renda_mensal
    }
}