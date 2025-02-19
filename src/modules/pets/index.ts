import Elysia from 'elysia';
import { ERROR_MESSAGE, HTTP_STATUS } from '../../common/enums';

const Pets = new Elysia({ name: 'Pets', prefix: '/pets' })
	.get('/', ({ error }) =>
		error(HTTP_STATUS.NOT_IMPLEMENTED, {
			status: HTTP_STATUS.NOT_IMPLEMENTED,
			message: ERROR_MESSAGE.NOT_IMPLEMENTED,
		}),
	)
	.get('/:id', ({ params: { id }, error }) =>
		error(HTTP_STATUS.NOT_IMPLEMENTED, {
			status: HTTP_STATUS.NOT_IMPLEMENTED,
			message: ERROR_MESSAGE.NOT_IMPLEMENTED,
		}),
	)
	.post('/', ({ error }) =>
		error(HTTP_STATUS.NOT_IMPLEMENTED, {
			status: HTTP_STATUS.NOT_IMPLEMENTED,
			message: ERROR_MESSAGE.NOT_IMPLEMENTED,
		}),
	)
	.patch('/:id', ({ params: { id }, error }) =>
		error(HTTP_STATUS.NOT_IMPLEMENTED, {
			status: HTTP_STATUS.NOT_IMPLEMENTED,
			message: ERROR_MESSAGE.NOT_IMPLEMENTED,
		}),
	)
	.delete('/:id', ({ params: { id }, error }) =>
		error(HTTP_STATUS.NOT_IMPLEMENTED, {
			status: HTTP_STATUS.NOT_IMPLEMENTED,
			message: ERROR_MESSAGE.NOT_IMPLEMENTED,
		}),
	);

export default Pets;
