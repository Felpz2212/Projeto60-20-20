import { MigrationInterface, QueryRunner } from "typeorm";

export class Tipo1704647219524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE tipo(
            tipo_id VARCHAR PRIMARY KEY,
          name VARCHAR NOT NULL,
          descricao VARCHAR NOT NULL
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tipo')
    }

}
