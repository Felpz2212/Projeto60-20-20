import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
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
    descricao: string;

    @Column({nullable: false})
    valor: number;

    @Column()
    usuario_id: string

    @ManyToOne(() => User)
    @JoinColumn({name: 'usuario_id'})
    usuario: User;

    @Column()
    tipo_id: string;

    @ManyToOne(() => TipoMov)
    @JoinColumn({ name: 'tipo_id' })
    tipo!: TipoMov;

    constructor(name: string, desc: string, valor: number, usuario: User, tipo: TipoMov){
        this.name = name;
        this.descricao = desc;
        this.valor = valor;
        this.usuario = usuario,
        this.tipo = tipo;
        this.tipo_id = tipo?.tipo_id;
        this.usuario_id = usuario?.user_id;
        this.movimentacao_id = randomUUID();
    }
}