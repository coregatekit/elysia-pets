import { pgSchema, timestamp } from 'drizzle-orm/pg-core';

const elysiaSchema = pgSchema('elysia-pets');
const timestamps = {
	created_at: timestamp().defaultNow().notNull(),
	updated_at: timestamp()
		.defaultNow()
		.notNull()
		.$onUpdate(() => new Date()),
	deleted_at: timestamp(),
};

export { elysiaSchema, timestamps };
