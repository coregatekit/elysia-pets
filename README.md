# Elysia Pets with Bun runtime

## Environment
Create `.env` file for database connection

```bash
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database_name>
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:8001/ with your browser to see the result.

# REST client for VSCode plugin
You can use `request.http` for API documentation.

[REST Client for VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

# Swagger
You can also use swagger for API documentation.

Open http://localhost:8001/api/docs