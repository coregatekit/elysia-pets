import Elysia from 'elysia';
import { ERROR_MESSAGE, HTTP_STATUS } from '../../common/enums';

const Breeds = new Elysia({ name: 'Breeds', prefix: '/breeds' }).get(
	'/',
	({ error }) =>
		error(HTTP_STATUS.NOT_IMPLEMENTED, {
			status: HTTP_STATUS.NOT_IMPLEMENTED,
			message: ERROR_MESSAGE.NOT_IMPLEMENTED,
		}),
);

export default Breeds;
