import Elysia from 'elysia';
import Health from '../modules/health';

const Routes = new Elysia({ prefix: '/api' }).use(Health);

export default Routes;
