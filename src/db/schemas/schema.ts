import { pgSchema, timestamp } from 'drizzle-orm/pg-core';
import { DB_SCHEMA } from '../../configs';

const elysiaSchema = pgSchema(DB_SCHEMA);
const timestamps = {
	created_at: timestamp().defaultNow().notNull(),
	updated_at: timestamp()
		.defaultNow()
		.notNull()
		.$onUpdate(() => new Date()),
	deleted_at: timestamp(),
};

export { elysiaSchema, timestamps };
