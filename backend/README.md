# Backend Service

This is the backend service built with Node.js, TypeScript, and Hono.js framework.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20 or later recommended)
- npm (comes with Node.js)
- PostgreSQL (v16 recommended)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Environment Setup

Create a `.env` file in the root directory with the variables from the `.env.example` :

```env
# Add your environment variables here
# Example:
# DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Development

To start the development server with hot-reload:

```bash
npm run dev
```

The server will be available at http://localhost:1337

### 5. Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build the TypeScript project
- `npm start` - Run the production build
- `npm run type-check` - Check TypeScript types
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Web Framework**: Hono.js
- **Database**: PostgreSQL with Kysely
- **API Documentation**: OpenAPI/Swagger via hono-openapi
- **Validation**: Valibot
- **Development Tools**:
  - ESLint for linting
  - Prettier for code formatting
