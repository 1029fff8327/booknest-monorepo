import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddMasterIdToReview1732225105103 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Добавляем столбец masterId в таблицу review
    await queryRunner.addColumn(
      'review',
      new TableColumn({
        name: 'masterId',
        type: 'int',
        isNullable: true, // Поле необязательное
      }),
    );

    // Добавляем внешний ключ на таблицу master
    await queryRunner.createForeignKey(
      'review',
      new TableForeignKey({
        columnNames: ['masterId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'master',
        onDelete: 'SET NULL', // При удалении мастера, поле обнуляется
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Удаляем внешний ключ
    const table = await queryRunner.getTable('review');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('masterId') !== -1,
    );
    if (foreignKey) {
      await queryRunner.dropForeignKey('review', foreignKey);
    }

    // Удаляем столбец masterId
    await queryRunner.dropColumn('review', 'masterId');
  }
}
