import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1704647257061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`
        // CREATE TABLE users(
        //   user_id VARCHAR PRIMARY KEY,
        //   name VARCHAR NOT NULL,
        //   email VARCHAR NOT NULL,
        //   password VARCHAR NOT NULL,
        //   renda_mensal DOUBLE NOT NULL
        // )
        // `)

        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'user_id',
                    type: 'string',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'string',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'renda_mensal',
                    type: 'double',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    
    }

}
