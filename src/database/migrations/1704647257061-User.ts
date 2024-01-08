import { MigrationInterface, QueryRunner } from "typeorm";

export class User1704647257061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE users(
            user_id VARCHAR PRIMARY KEY,
          name VARCHAR NOT NULL,
          email VARCHAR NOT NULL,
          password VARCHAR NOT NULL,
          renda_mensal DOUBLE NOT NULL
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    
    }

}
