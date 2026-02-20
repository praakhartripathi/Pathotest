-- =============================================================
-- Pathotest Database Schema
-- Engine: MySQL 8.0
-- =============================================================

CREATE DATABASE IF NOT EXISTS pathotest CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE pathotest;

-- -------------------------------------------------------------
-- Users & Roles
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS roles (
    id      BIGINT       NOT NULL AUTO_INCREMENT,
    name    VARCHAR(50)  NOT NULL UNIQUE,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS users (
    id           BIGINT        NOT NULL AUTO_INCREMENT,
    name         VARCHAR(100)  NOT NULL,
    email        VARCHAR(150)  NOT NULL UNIQUE,
    password     VARCHAR(255)  NOT NULL,
    phone        VARCHAR(20),
    is_active    BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_users_email (email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS user_roles (
    user_id  BIGINT NOT NULL,
    role_id  BIGINT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- -------------------------------------------------------------
-- Patients
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS patients (
    id            BIGINT        NOT NULL AUTO_INCREMENT,
    user_id       BIGINT        UNIQUE,
    patient_code  VARCHAR(20)   NOT NULL UNIQUE,
    date_of_birth DATE,
    gender        ENUM('MALE','FEMALE','OTHER'),
    blood_group   VARCHAR(5),
    address       TEXT,
    created_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_patients_code (patient_code)
) ENGINE=InnoDB;

-- -------------------------------------------------------------
-- Tests & Reports
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS test_categories (
    id    BIGINT       NOT NULL AUTO_INCREMENT,
    name  VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS tests (
    id           BIGINT         NOT NULL AUTO_INCREMENT,
    category_id  BIGINT,
    code         VARCHAR(20)    NOT NULL UNIQUE,
    name         VARCHAR(150)   NOT NULL,
    description  TEXT,
    price        DECIMAL(10,2)  NOT NULL,
    duration_hrs INT            NOT NULL DEFAULT 24,
    is_active    BOOLEAN        NOT NULL DEFAULT TRUE,
    created_at   DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES test_categories(id) ON DELETE SET NULL,
    INDEX idx_tests_code (code)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS orders (
    id           BIGINT        NOT NULL AUTO_INCREMENT,
    patient_id   BIGINT        NOT NULL,
    order_no     VARCHAR(30)   NOT NULL UNIQUE,
    status       ENUM('PENDING','PROCESSING','COMPLETED','CANCELLED') NOT NULL DEFAULT 'PENDING',
    total_amount DECIMAL(10,2) NOT NULL,
    notes        TEXT,
    ordered_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE RESTRICT,
    INDEX idx_orders_patient (patient_id),
    INDEX idx_orders_status  (status)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS order_items (
    id        BIGINT         NOT NULL AUTO_INCREMENT,
    order_id  BIGINT         NOT NULL,
    test_id   BIGINT         NOT NULL,
    price     DECIMAL(10,2)  NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (test_id)  REFERENCES tests(id)  ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS reports (
    id           BIGINT       NOT NULL AUTO_INCREMENT,
    order_item_id BIGINT      NOT NULL UNIQUE,
    result       TEXT,
    status       ENUM('PENDING','READY') NOT NULL DEFAULT 'PENDING',
    report_file  VARCHAR(500),
    created_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    released_at  DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (order_item_id) REFERENCES order_items(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- -------------------------------------------------------------
-- Home Collection Requests
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS home_collection_requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(120) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    city VARCHAR(80) NOT NULL,
    consent BOOLEAN NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_home_collection_mobile (mobile),
    INDEX idx_home_collection_city (city),
    INDEX idx_home_collection_created_at (created_at)
) ENGINE=InnoDB;

-- -------------------------------------------------------------
-- Seed default roles
-- -------------------------------------------------------------
INSERT IGNORE INTO roles (name) VALUES ('ROLE_ADMIN'), ('ROLE_PATIENT'), ('ROLE_LAB_STAFF');
