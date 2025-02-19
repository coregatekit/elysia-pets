import 'dotenv/config';
import { Elysia } from 'elysia';
import Routes from './routes';
import swagger from '@elysiajs/swagger';

const PORT = process.env.PORT || 8001;

const app = new Elysia()
	.use(
		swagger({
			provider: 'scalar',
			path: '/api/docs',
			autoDarkMode: true,
		}),
	)
	.use(Routes)
	.listen(PORT);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
