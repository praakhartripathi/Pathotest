# Pathotest

Full-stack pathology lab platform built with React + Vite (frontend) and Spring Boot (backend), serving Uttar Pradesh.

## Project Structure

```text
pathotest/
├── .ai/                           # AI assistant change log
│   └── changelog.txt
├── frontend/                      # React app (Vite + Tailwind CSS)
│   ├── public/
│   │   ├── offers/                # Offer popup artwork
│   │   └── blogs/                 # Blog thumbnail images
│   └── src/
│       ├── components/
│       │   ├── TopBar.jsx
│       │   ├── Navbar.jsx
│       │   ├── HomeHero.jsx
│       │   ├── OfferPopup.jsx
│       │   ├── WellnessPackagesSection.jsx
│       │   ├── TestByHealthRisks.jsx
│       │   ├── MostPrescribedTests.jsx
│       │   ├── TestByHealthConditions.jsx
│       │   ├── PromoBanners.jsx
│       │   ├── WhyPathotestLabs.jsx
│       │   ├── CustomerReviews.jsx
│       │   ├── OurBlogs.jsx
│       │   ├── BloodTestsNearYou.jsx
│       │   ├── AboutPathotest.jsx
│       │   └── PopularHealthTests.jsx
│       ├── pages/
│       │   ├── InvestorPage.jsx
│       │   └── ContactPage.jsx
│       └── test/
├── backend/                       # Spring Boot REST API
│   └── src/main/java/com/pathotest/
│       ├── auth/                  # OTP Authentication APIs
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

### Option 1: Docker (recommended, hot reload enabled)

```bash
docker compose up --build
```

- Frontend: `http://localhost:25001`
- Backend: `http://localhost:25999`
- Health: `http://localhost:25999/actuator/health`

This command now automatically applies `docker-compose.override.yml` and enables:
- Vite HMR for frontend (no container restart needed)
- Spring DevTools restart for backend (code/resource changes picked from mounted source)

### Option 2: Docker Dev (hot reload)

```bash
docker compose -f docker-compose.dev.yml up --build
```

- Frontend (Vite HMR): `http://localhost:25001`
- Backend API: `http://localhost:25999`

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

## Frontend — Home Page Sections

The home page is composed of the following sections (in order):

| # | Component | Description |
|---|---|---|
| 1 | `HomeHero` | Hero banner, Schedule Home Collection form, feature badges |
| 2 | `WellnessPackagesSection` | Top Wellness Packages carousel (Pathotest Total Plus, Advance, Platinum, Complete) |
| 3 | `TestByHealthRisks` | Health risk category icon grid (Heart, Liver, Kidney, Bone, Thyroid…) |
| 4 | `MostPrescribedTests` | Most Prescribed Tests horizontal carousel with pricing |
| 5 | `TestByHealthConditions` | Health condition icon grid (Alcohol, Allergy, Anemia, Arthritis, Cancer…) |
| 6 | `PromoBanners` | Two promo cards — Acne awareness + Pathotest HairfallCheck |
| 7 | `WhyPathotestLabs` | 8-card trust grid (NABL, Doctors, Reporting Time, Accuracy…) |
| 8 | `CustomerReviews` | Customer testimonials horizontal scroll carousel |
| 9 | `OurBlogs` | 4-card blog grid with thumbnail, title, Know More CTA |
| 10 | `BloodTestsNearYou` | Dense 4-col grid of UP city/area blood test location links |
| 11 | `AboutPathotest` | Brand description paragraph for SEO |
| 12 | `PopularHealthTests` | 130+ pipe-separated health test names for SEO |

### Other Pages

- **InvestorPage** — Investor Relations with financials, annual reports, governance
- **ContactPage** — Tabbed contact page (Corporate Office, Company Info, Enquiry)

### Frontend Features

- Pathotest-branded landing page
- OTP-based Authentication (Sign In / Sign Up flow)
- Floating WhatsApp CTA button
- Timed offer popup:
  - appears after 120 seconds
  - reappears every 120 seconds even if closed
  - call CTA: `tel:+917500075111`
- All cities within Uttar Pradesh supported in home collection form

## Backend Features

### OTP Authentication APIs

- `POST /api/auth/generate-otp`: Generates a 6-digit OTP for the given mobile number.
- `POST /api/auth/verify-otp`: Verifies the OTP and returns a JWT token for secure access.

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

Other endpoints are secured by Spring Security via JWT token obtained from `/api/auth/verify-otp`.

### Migrations

Flyway migrations are in:

- `backend/src/main/resources/db/migration/`

Includes:
- `V1__init_schema.sql`
- `V2__home_collection_requests.sql`
- `V3__content_and_locations.sql`

## Quick API Examples

Generate OTP:

```bash
curl -X POST "http://localhost:8080/api/auth/generate-otp" \
  -H "Content-Type: application/json" \
  -d '{
    "mobile": "9876543210"
  }'
```

Verify OTP:

```bash
curl -X POST "http://localhost:8080/api/auth/verify-otp" \
  -H "Content-Type: application/json" \
  -d '{
    "mobile": "9876543210",
    "otp": "123456"
  }'
```

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
curl "http://localhost:8080/api/locations?city=Lucknow"
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
- Blog thumbnail images go in `frontend/public/blogs/` (filenames: `skin-infection.jpg`, `typhoid-fever.jpg`, `sciatica.jpg`, `pineapple-pregnancy.jpg`).
- Offer popup image goes in `frontend/public/offers/pathotest-offer.png`.
