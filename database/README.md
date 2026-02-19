# Pathotest Database

This folder contains database schema definitions and migration files.

## Structure

```
database/
├── schema.sql                    ← Reference DDL (full schema for documentation)
├── migrations/
│   └── V1__init_schema.sql       ← Standalone migration reference
└── README.md
```

> **Note:** In production, Flyway migrations are located inside the Spring Boot app at  
> `backend/src/main/resources/db/migration/` and run automatically on startup.

## Entity Overview

| Table | Description |
|-------|-------------|
| `roles` | User roles: ADMIN, PATIENT, LAB_STAFF |
| `users` | Authenticated system users |
| `user_roles` | Many-to-many: users ↔ roles |
| `patients` | Patient profile linked to a user |
| `test_categories` | Lab test groupings |
| `tests` | Available lab tests with pricing |
| `orders` | Patient test orders |
| `order_items` | Line items for each order |
| `reports` | Test result reports per order item |

## Running Locally (Docker)

```bash
# Copy and configure env vars
cp .env.example .env

# Start all services
docker compose up --build
```

## Adding a New Migration

1. Create a new file in `backend/src/main/resources/db/migration/`
2. Follow naming: `V{n}__{description}.sql` e.g. `V2__add_appointments.sql`
3. Flyway auto-runs pending migrations on next app startup
