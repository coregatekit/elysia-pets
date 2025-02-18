import { pgEnum, uuid, varchar } from 'drizzle-orm/pg-core';
import { elysiaSchema, timestamps } from './schema';

export const AnimalTypeEnum = pgEnum('animal_type', [
	'Mammals',
	'Birds',
	'Reptiles',
	'Amphibians',
	'Invertebrates',
	'Fish',
]);

export const animals = elysiaSchema.table('animals', {
	id: uuid().primaryKey().defaultRandom(),
	name: varchar({ length: 100 }).notNull(),
	type: AnimalTypeEnum().notNull(),
	...timestamps,
});
