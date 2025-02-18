import Elysia from 'elysia';
import { ERROR_MESSAGE, HTTP_STATUS } from '../../db/common/enums';

const Animals = new Elysia({ name: 'Animals', prefix: '/animals' })
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
	);

export default Animals;
