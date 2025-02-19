import { uuid, varchar } from 'drizzle-orm/pg-core';
import { elysiaSchema, timestamps } from './schema';

export const animals = elysiaSchema.table('animals', {
	id: uuid().primaryKey().defaultRandom(),
	name: varchar({ length: 100 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	...timestamps,
});
