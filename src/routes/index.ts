import Elysia from 'elysia';
import Health from '../modules/health';
import Animals from '../modules/animals';
import Breeds from '../modules/breeds';

const Routes = new Elysia({ prefix: '/api' })
	.use(Health)
	.use(Animals)
	.use(Breeds);

export default Routes;
