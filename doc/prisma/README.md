# Prisma Overview

---

## What is Prisma?

Prisma is a modern **ORM (Object-Relational Mapping)** tool for Node.js and TypeScript that simplifies database access and management. It provides a type-safe query builder, migration system, and intuitive data modeling.

Prisma supports multiple databases, including PostgreSQL, MySQL, SQLite, SQL Server, and MongoDB (preview).

---

## Key Components of Prisma

### 1. Prisma Client

An auto-generated and type-safe query builder to interact with your database.

- Provides methods for CRUD operations.
- Ensures compile-time type safety and autocompletion.
- Used directly in your Node.js code to query and manipulate data.

### 2. Prisma Schema

A declarative file (`schema.prisma`) where you define your data models, database connection, and generators.

- Defines models (tables/collections) and their fields.
- Specifies relations between models.
- Configures the datasource (database connection).
- Configures generators (e.g., Prisma Client).

### 3. Prisma Migrate

A migration tool that helps you evolve your database schema safely and version-controlled.

- Generates SQL migration scripts based on schema changes.
- Applies migrations to your database.
- Helps collaborate with team members on database schema changes.

---

## Basic Workflow with Prisma

1. **Define your data models** in `schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id       Int      @id @default(autoincrement())
  name     String
  email    String   @unique
  password String
}
```

## Main Prisma CLI Commands

| Command                     | Description                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `npx prisma init`           | Initialize a new Prisma project (creates `schema.prisma` and `.env`).                |
| `npx prisma generate`       | Generate Prisma Client based on your schema.                                         |
| `npx prisma migrate dev`    | Create and apply migrations in development. Automatically generates migration files. |
| `npx prisma migrate deploy` | Apply all pending migrations in production or deployment environment.                |
| `npx prisma migrate reset`  | Reset the database by dropping all data, reapplying migrations (development only).   |
| `npx prisma db pull`        | Introspect an existing database and update your Prisma schema accordingly.           |
| `npx prisma db push`        | Push your Prisma schema state to the database without creating migrations.           |
| `npx prisma studio`         | Open Prisma Studio, a GUI for browsing and editing your database.                    |
| `npx prisma migrate status` | Show the status of applied and pending migrations.                                   |
| `npx prisma format`         | Format your Prisma schema file (`schema.prisma`).                                    |

---

## Quick Usage Examples

- Initialize Prisma in your project:

  ```bash
  npx prisma init
  ```

- Create a new migration and apply it:

  ```bash
  npx prisma migrate dev --name add_users_table
  ```

- Deploy migrations to production:

  ```bash
  npx prisma migrate deploy
  ```

- Introspect an existing database:

  ```bash
  npx prisma db pull
  ```

- Generate Prisma Client (run after schema changes):

  ```bash
  npx prisma generate
  ```

- Open Prisma Studio:

  ```bash
  npx prisma studio
  ```
