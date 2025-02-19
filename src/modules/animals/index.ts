import Elysia from 'elysia';
import {
	ERROR_MESSAGE,
	HTTP_STATUS,
	STANDARD_MESSAGE,
} from '../../common/enums';
import AnimalService from './service';
import db from '../../db';

const Animals = new Elysia({ name: 'Animals', prefix: '/animals' })
	.decorate('animalService', new AnimalService(db))
	.get('/', async ({ animalService }) => {
		const animals = await animalService.getAnimals();
		return {
			status: HTTP_STATUS.OK,
			message: STANDARD_MESSAGE.SUCCESS,
			data: animals,
		};
	})
	.get('/:id', ({ params: { id }, error }) =>
		error(HTTP_STATUS.NOT_IMPLEMENTED, {
			status: HTTP_STATUS.NOT_IMPLEMENTED,
			message: ERROR_MESSAGE.NOT_IMPLEMENTED,
		}),
	);

export default Animals;
