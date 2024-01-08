import { MigrationInterface, QueryRunner } from "typeorm";

export class Movimentacoes1704647138155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE movimentacoes(
            movimentacao_id VARCHAR PRIMARY KEY,
          name VARCHAR NOT NULL,
          descricao VARCHAR NOT NULL,
          valor DOUBLE NOT NULL,
          usuario_id VARCHAR,
          tipo_id VARCHAR,
          CONSTRAINT fk_usuario_movimentacao
              FOREIGN KEY (usuario_id)
              REFERENCES users(user_id)
          CONSTRAINT fk_tipo_movimentacao
              FOREIGN KEY (tipo_id)
              REFERENCES tipo(tipo_id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movimentacoes');
    }

}
