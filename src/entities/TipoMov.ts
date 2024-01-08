import { randomUUID } from "crypto";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Movimentacao } from "./Movimentacao";

@Entity('tipo_mov')
export class TipoMov{
    
    @PrimaryColumn()
    tipo_id: string;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    desc: string

    @OneToMany(() => Movimentacao, (movimentacao) => movimentacao.tipo)
    movimentacoes!: Movimentacao[]

    constructor(name: string, desc: string){
        this.name = name;
        this.desc = desc;
        this.tipo_id = randomUUID();
    }
}