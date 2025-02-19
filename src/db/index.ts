import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DB_URL } from '../configs';

const queryClient = postgres(DB_URL || '');
const db = drizzle({
	client: queryClient,
});

export type Database = typeof db;

export default db;
