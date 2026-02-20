-- OTP requests table (MySQL-compatible)
CREATE TABLE IF NOT EXISTS otp_requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mobile VARCHAR(15) NOT NULL,
    otp VARCHAR(6) NOT NULL,
    expires_at DATETIME NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    attempts SMALLINT NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE INDEX idx_otp_requests_mobile ON otp_requests(mobile);

-- Dedicated auth user table to avoid collision with existing domain users table from V1
CREATE TABLE IF NOT EXISTS auth_users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
