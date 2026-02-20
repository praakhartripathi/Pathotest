-- OTP requests table
CREATE TABLE otp_requests (
    id          BIGSERIAL PRIMARY KEY,
    mobile      VARCHAR(15)  NOT NULL,
    otp         VARCHAR(6)   NOT NULL,
    expires_at  TIMESTAMP    NOT NULL,
    verified    BOOLEAN      NOT NULL DEFAULT FALSE,
    attempts    SMALLINT     NOT NULL DEFAULT 0,
    created_at  TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_otp_requests_mobile ON otp_requests(mobile);

-- Users table (created/found on first successful OTP verify)
CREATE TABLE users (
    id          BIGSERIAL PRIMARY KEY,
    mobile      VARCHAR(15)  NOT NULL UNIQUE,
    created_at  TIMESTAMP    NOT NULL DEFAULT NOW()
);
