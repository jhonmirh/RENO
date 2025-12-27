import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

const sslConfig = process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined;

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // soporte src y dist
  synchronize: true,           // crea/actualiza tablas automáticamente
  dropSchema: true,            // solo para desarrollo: elimina todo al levantar
  logging: false,
  ssl: sslConfig,
};

export const connectionSource = new DataSource(config);
