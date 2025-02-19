import type { Database } from '../../db';
import { animals } from '../../db/schemas/animals';

export default class AnimalService {
	constructor(private readonly db: Database) {}

	async getAnimals() {
		return await this.db.select().from(animals);
	}
}
