# ⚙️ Pathotest — Backend

Spring Boot 3.4.2 REST API for the Pathotest application.

## ⚡ Tech Stack

- **Spring Boot 3.4.2** — Application framework
- **Java 17** — Language
- **Spring Web** — REST API layer
- **Spring Data JPA** — Database ORM (Hibernate)
- **Spring Security** — Authentication & authorization
- **Spring Validation** — Request validation
- **Lombok** — Boilerplate reduction
- **H2** — In-memory database (dev only)
- **Spring DevTools** — Hot reload in development

## 📁 Structure

```
backend/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/com/pathotest/
    │   │   └── PathotestApplication.java   # Entry point
    │   └── resources/
    │       └── application.properties      # App config
    └── test/
        └── java/com/pathotest/
            └── PathotestApplicationTests.java
```

## 🚀 Getting Started

```bash
# Run the application
mvn spring-boot:run
# → http://localhost:8080

# Run tests
mvn test

# Build JAR
mvn clean package
```

## ⚙️ Configuration

Key settings in `application.properties`:

| Property | Value | Description |
|----------|-------|-------------|
| `server.port` | `8080` | API server port |
| `spring.h2.console.enabled` | `true` | H2 console at `/h2-console` |
| `spring.jpa.hibernate.ddl-auto` | `update` | Auto-create/update schema |

## 🗄️ Database

**Development:** H2 in-memory database (auto-configured, no setup needed)  
**Production:** Replace H2 with MySQL/PostgreSQL — add driver dependency and update `application.properties`.

```properties
# MySQL example
spring.datasource.url=jdbc:mysql://localhost:3306/pathotest
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```
