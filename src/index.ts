import 'dotenv/config';
import { Elysia } from 'elysia';
import Routes from './routes';
import swagger from '@elysiajs/swagger';
import { APP_VERSION } from './common/constants';

const PORT = process.env.PORT || 8001;

const app = new Elysia()
	.use(
		swagger({
			documentation: {
				info: {
					title: 'Elysia Pets API',
					version: APP_VERSION,
					description: 'API documentation for Elysia Pets',
				},
				servers: [
					{
						url: 'http://localhost:8001',
						description: 'Development server',
					},
				],
				security: [
					{
						bearerAuth: [],
					},
				],
			},
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
