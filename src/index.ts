import 'dotenv/config';
import { Elysia } from 'elysia';
import Routes from './routes';

const PORT = process.env.PORT || 8001;

const app = new Elysia().use(Routes).listen(PORT);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
