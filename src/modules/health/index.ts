import Elysia from 'elysia';
import { HTTP_STATUS, STANDARD_MESSAGE } from '../../common/enums';

const Health = new Elysia({ name: 'Health Check', prefix: '/health' }).get(
	'/',
	() => ({
		status: HTTP_STATUS.OK,
		message: STANDARD_MESSAGE.HEALTH_CHECK,
	}),
);

export default Health;
