import * as dotenv from 'dotenv';

import { DataSource } from 'typeorm';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Путь к сущностям
  migrations: [__dirname + '/migrations/*{.ts,.js}'], // Путь к миграциям
  synchronize: false, // Отключаем автоматическую синхронизацию
});
