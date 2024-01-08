import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class Movimentacoes1704647138155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`
        // CREATE TABLE movimentacoes(
        //     movimentacao_id VARCHAR PRIMARY KEY,
        //   name VARCHAR NOT NULL,
        //   descricao VARCHAR NOT NULL,
        //   valor DOUBLE NOT NULL,
        //   usuario_id VARCHAR,
        //   tipo_id VARCHAR,
        //   CONSTRAINT fk_usuario_movimentacao
        //       FOREIGN KEY (usuario_id)
        //       REFERENCES users(user_id)
        //   CONSTRAINT fk_tipo_movimentacao
        //       FOREIGN KEY (tipo_id)
        //       REFERENCES tipo(tipo_id)
        // )
        // PRAGMA foreign_keys=on;
        // `)

        await queryRunner.createTable(new Table({
            name: 'movimentacoes',
            columns: [
                {
                    name: 'movimentacao_id',
                    type: 'string',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'descricao',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'valor',
                    type: 'number',
                    isNullable: false
                },
            ]
        }))

        await queryRunner.addColumn('movimentacoes', new TableColumn({
            name: 'usuario_id',
            type: 'string'
        }))

        await queryRunner.createForeignKey('movimentacoes', new TableForeignKey({
            columnNames: ['usuario_id'],
            referencedColumnNames: ['user_id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }))

        await queryRunner.addColumn('movimentacoes', new TableColumn({
            name: 'tipo_id',
            type: 'string'
        }))

        await queryRunner.createForeignKey('movimentacoes', new TableForeignKey({
            columnNames: ['tipo_id'],
            referencedColumnNames: ['tipo_id'],
            referencedTableName: 'tipo',
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("movimentacoes");
        const foreignKey = table?.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("usuario_id") !== -1,
        )
        await queryRunner.dropForeignKey("movimentacoes", foreignKey!)

        const foreignKey2 = table?.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("tipo_id") !== -1,
        )
        await queryRunner.dropForeignKey("movimentacoes", foreignKey!)

        await queryRunner.dropTable('movimentacoes');
    }

}
