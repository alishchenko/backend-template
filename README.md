# Backend TypeScript Template

This is a template for building a backend server using TypeScript.

## Features

- TypeScript
- Node.js
- Express
- TypeORM for database integration
- ESLint for code styling

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository that uses this template.
2. Create an `.env` file. You can find an example in `env.example`.
3. Install the required dependencies by running `npm install` (or `yarn install`).
4. Add database container `docker-compose up -d`.
5. Run the migrations `npm run migrate:up` (or `yarn migrate:up`).
6. Start the service by running `npm run dev` (or `yarn dev`).

## Working with the Database

To work with the database, follow these steps:

1. Add or modify entities in `./internal/data/entity`

2. Generate a migration:
   ```
   npm run migration:generate ./internal/data/migration/<migration-name> 
   (or yarn migration:generate ./internal/data/migration/<migration-name>)
   ```

2. Run the migrations (migrate up):
   ```
   npm run migrate:up (or yarn migrate:up)
   ```

3. Rollback migrations (migrate down):
   ```
   npm run migrate:down (or yarn migrate:down)
   ```

## Code Styling with ESLint

ESLint is used for maintaining code quality and enforcing code style guidelines. 
* To view errors and warnings produced by ESLint, run `npm run lint` (or `yarn lint`).
* To automatically fix some of these issues, run `npm run lint:fix` (or `yarn lint:fix`).


Feel free to customize the template according to your project's requirements.
