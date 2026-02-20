# syntax=docker/dockerfile:1
# ── Stage 1: Build ───────────────────────────────────────────────────
FROM maven:3.9-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy only pom.xml first so the dependency download layer is cached
# until pom.xml actually changes.
# --mount=type=cache persists ~/.m2 between builds on the same host
# even after pom.xml changes — only NEW jars are downloaded.
COPY pom.xml ./
RUN --mount=type=cache,target=/root/.m2 \
    mvn dependency:go-offline -q

COPY src ./src
RUN --mount=type=cache,target=/root/.m2 \
    mvn clean package -DskipTests -q

# ── Stage 2: Run ─────────────────────────────────────────────────────
FROM eclipse-temurin:17-jre AS runner

WORKDIR /app

RUN groupadd -r appgroup && useradd -r -g appgroup appuser

COPY --from=builder /app/target/*.jar app.jar

RUN chown appuser:appgroup app.jar
USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
