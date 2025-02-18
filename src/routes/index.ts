import Elysia from 'elysia';
import Health from '../modules/health';
import Animals from '../modules/animals';

const Routes = new Elysia({ prefix: '/api' }).use(Health).use(Animals);

export default Routes;
