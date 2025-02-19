import 'dotenv/config';
import packageJson from '../../package.json';

const APP_VERSION = packageJson.version || '1.0.0';
const DB_URL = process.env.DATABASE_URL || '';
const DB_SCHEMA = process.env.DATABASE_SCHEMA || 'elysia-pets';

export {
  APP_VERSION,
  DB_URL,
  DB_SCHEMA,
}