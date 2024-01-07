import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { TipoMov } from "./TipoMov";
import { User } from "./User";
import { randomUUID } from "crypto";

@Entity('movimentacoes')
export class Movimentacao{


    @PrimaryColumn()
    movimentacao_id: string;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    desc: string;

    @Column({nullable: false})
    valor: number;

    @ManyToOne(() => User, (user) => user.movimentacoes)
    usuario: User;

    @ManyToOne(() => TipoMov, (tipo) => tipo.movimentacoes)
    tipo: TipoMov;

    constructor(name: string, desc: string, valor: number, usuario: User, tipo: TipoMov){
        this.name = name;
        this.desc = desc;
        this.valor = valor;
        this.usuario = usuario,
        this.tipo = tipo;
        this.movimentacao_id = randomUUID();
    }
}