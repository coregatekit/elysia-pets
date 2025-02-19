import Elysia from 'elysia';

const Owners = new Elysia({ name: 'Owners', prefix: '/owners' }).get(
	'/',
	({ error }) =>
		error(501, {
			status: 501,
			message: 'Not Implemented',
		}),
);

export default Owners;
