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

    @OneToMany(() => User, (usuario) => usuario.movimentacoes)
    movimentacoes!: Movimentacao[];

    constructor(
        name: string,
        email: string,
        password: string
    ){
        this.user_id = randomUUID();
        this.name = name;
        this.email = email;
        this.password = password
    }
}