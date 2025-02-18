import Elysia from 'elysia';

const Health = new Elysia({ name:'Health Check', prefix: '/health' }).get('/', () => 'I\'m fine, 괜찮아 😊');

export default Health;
