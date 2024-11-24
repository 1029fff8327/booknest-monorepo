import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialTables1732225104102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Создание таблицы "booking"
    await queryRunner.query(`
      CREATE TABLE "booking" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "email" VARCHAR NOT NULL,
        "masterName" VARCHAR NOT NULL,
        "service" VARCHAR NOT NULL,
        "date" VARCHAR NOT NULL,
        "time" VARCHAR NOT NULL
      );
    `);

    // Создание таблицы "master"
    await queryRunner.query(`
      CREATE TABLE "master" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "description" VARCHAR,
        "email" VARCHAR,
        "phone" VARCHAR,
        "photo" VARCHAR,
        "services" TEXT NOT NULL,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Создание таблицы "review"
    await queryRunner.query(`
      CREATE TABLE "review" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "rating" INTEGER NOT NULL,
        "comment" VARCHAR NOT NULL
      );
    `);

    // Создание таблицы "setting"
    await queryRunner.query(`
      CREATE TABLE "setting" (
        "id" SERIAL PRIMARY KEY,
        "key" VARCHAR NOT NULL,
        "value" VARCHAR NOT NULL
      );
    `);

    // Создание таблицы "shop_settings"
    await queryRunner.query(`
      CREATE TABLE "shop_settings" (
        "id" SERIAL PRIMARY KEY,
        "domain" VARCHAR NOT NULL,
        "shopName" VARCHAR NOT NULL
      );
    `);

    // Создание таблицы "user"
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "email" VARCHAR UNIQUE NOT NULL,
        "password" VARCHAR NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Удаление таблиц в обратном порядке
    await queryRunner.query(`DROP TABLE "user";`);
    await queryRunner.query(`DROP TABLE "shop_settings";`);
    await queryRunner.query(`DROP TABLE "setting";`);
    await queryRunner.query(`DROP TABLE "review";`);
    await queryRunner.query(`DROP TABLE "master";`);
    await queryRunner.query(`DROP TABLE "booking";`);
  }
}
