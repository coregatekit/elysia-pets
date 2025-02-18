import Elysia from 'elysia';
import { HTTP_STATUS } from '../../db/common/constants';

const Animals = new Elysia({ name: 'Animals', prefix: '/animals' }).get(
	'/',
	({ error }) => error(HTTP_STATUS.NOT_IMPLEMENTED, 'Not implemented'),
);

export default Animals;
