# Gentelmen — music discovery backend and web app

A full-stack project exploring a unified music catalogue across external providers. The backend contains provider adapters for Audius and Yandex Music and stores normalized music entities in PostgreSQL.

## Current scope

- Provider-oriented backend structure
- Audius and Yandex Music client/service modules
- Normalized entities for artists, albums, tracks, and providers
- Provider-specific source records and synchronization status
- User playlists, playlist tracks, and favorites
- React pages for the application, including login, registration, and dashboard routes

Provider integrations are still a work in progress; availability depends on the external services and their API access.

## Tech stack

- **Backend:** Node.js, TypeScript, NestJS
- **Frontend:** React, TypeScript, Vite
- **Database:** PostgreSQL
- **ORM:** Prisma
- **HTTP client:** Fetch API
- **Infrastructure:** Docker Compose, Redis service

## Run locally with Docker

Requirements: Docker Engine and Docker Compose.

1. Clone the repository.
2. Create the local environment file:

   ```bash
   cp .env.example .env
   ```

3. Set the values required by the provider client in `.env`.
4. Start the services:

   ```bash
   docker compose up --build
   ```

Development URLs:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

Stop the services with `docker compose down`. Add `-v` only if you also want to delete the local database and Redis volumes.

## Environment variables

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `AUDIUS_API_KEY` | API key used by the Audius client |
| `AUDIUS_BASE_URL` | Base URL used by the Audius client |

Copy `.env.example` to `.env` and use your own credentials. Do not commit real API keys or local environment files.

## Project structure

- `backend/` — NestJS API, provider adapters, Prisma schema and migrations
- `frontend/` — React application
- `compose.yml` — local development services

This is a work in progress and is not presented as a production-ready music service.
