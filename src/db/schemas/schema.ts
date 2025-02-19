import { pgSchema, timestamp } from 'drizzle-orm/pg-core';
import { DB_INTEGRATION_SCHEMA, DB_SCHEMA } from '../../common/constants';

const elysiaSchema = pgSchema(DB_SCHEMA);
const timestamps = {
	created_at: timestamp().defaultNow().notNull(),
	updated_at: timestamp()
		.defaultNow()
		.notNull()
		.$onUpdate(() => new Date()),
	deleted_at: timestamp(),
};
const integrationSchema = pgSchema(DB_INTEGRATION_SCHEMA);

export { elysiaSchema, timestamps, integrationSchema };
