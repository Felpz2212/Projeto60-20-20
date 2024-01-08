import { randomUUID } from "crypto";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Movimentacao } from "./Movimentacao";

@Entity('tipo')
export class TipoMov{
    
    @PrimaryColumn()
    tipo_id: string;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    descricao: string

    constructor(name: string, desc: string){
        this.name = name;
        this.descricao = desc;
        this.tipo_id = randomUUID();
    }
}