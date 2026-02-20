# PathoTest

Full-stack pathology lab platform built with React + Vite (frontend) and Spring Boot (backend).

## Project Structure

```text
pathotest/
├── frontend/                      # React app (Vite + Tailwind)
│   ├── public/offers/             # Offer popup artwork
│   └── src/components/            # TopBar, Navbar, Hero, Popup, Wellness section
├── backend/                       # Spring Boot REST API
│   └── src/main/java/com/pathotest/
│       ├── homecollection/        # Lead capture (Schedule Home Collection)
│       ├── wellnesspackage/       # Public package catalog APIs
│       ├── labtest/               # Public tests APIs
│       ├── blog/                  # Public blog APIs
│       ├── location/              # Public location APIs
│       └── common/                # API response + global exception handler
├── database/                      # SQL schema/migrations for local bootstrap
├── docker-compose.yml             # Production-like Docker stack
├── docker-compose.dev.yml         # Docker dev stack with hot reload
└── README.md
```

## Prerequisites

- Docker Desktop (recommended)
- Node.js 18+
- Java 17+
- Maven 3.9+

## Run the App

### Option 1: Docker (recommended)

```bash
docker compose up --build
```

- Frontend: `http://localhost`
- Backend: `http://localhost:8080`
- Health: `http://localhost:8080/actuator/health`

### Option 2: Docker Dev (hot reload)

```bash
docker compose -f docker-compose.dev.yml up --build
```

- Frontend (Vite HMR): `http://localhost:5173`
- Backend API: `http://localhost:8080`

### Option 3: Run services separately

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
mvn spring-boot:run
```

## Frontend Features

- Pathkind-style landing page layout (TopBar + Navbar + Hero + Wellness cards)
- Floating WhatsApp CTA button
- Timed offer popup:
  - appears globally after 120 seconds
  - reappears every 120 seconds even if closed
  - call CTA: `tel:+917500075111`

## Backend Features

### Home Collection Lead API

`POST /api/home-collection`

Validates:
- `name` required
- `mobile` must be 10 digits
- `city` must be a supported UP city
- `consent` must be true

Persists to `home_collection_requests` with status lifecycle:
- `NEW`
- `CALLED`
- `BOOKED`

### Public Catalog APIs

- `GET /api/packages`
- `GET /api/tests`
- `GET /api/blogs`
- `GET /api/blogs/{slug}`
- `GET /api/locations?city=<city>`

### API Response Format

All new endpoints use wrapper format:

```json
{
  "success": true,
  "data": {},
  "message": "..."
}
```

### Security

Public endpoints:
- `POST /api/home-collection`
- `GET /api/packages`
- `GET /api/tests`
- `GET /api/blogs`
- `GET /api/blogs/**`
- `GET /api/locations`

Other endpoints are secured by Spring Security.

### Migrations

Flyway migrations are in:

- `backend/src/main/resources/db/migration/`

Includes:
- `V1__init_schema.sql`
- `V2__home_collection_requests.sql`
- `V3__content_and_locations.sql`

## Quick API Examples

Create home collection lead:

```bash
curl -X POST "http://localhost:8080/api/home-collection" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prakhar Tripathi",
    "mobile": "9876543210",
    "city": "Lucknow",
    "consent": true
  }'
```

Fetch wellness packages:

```bash
curl "http://localhost:8080/api/packages"
```

Fetch tests:

```bash
curl "http://localhost:8080/api/tests"
```

Fetch blogs:

```bash
curl "http://localhost:8080/api/blogs"
```

Fetch location pages by city:

```bash
curl "http://localhost:8080/api/locations?city=Gurgaon"
```

## Testing

Frontend:

```bash
cd frontend
npm run test
npm run build
```

Backend:

```bash
cd backend
mvn -DskipTests package
```

## Notes

- The frontend proxies `/api/*` requests in both Vite dev mode and nginx Docker runtime.
- `.env` is gitignored; use `.env.example` as reference.
