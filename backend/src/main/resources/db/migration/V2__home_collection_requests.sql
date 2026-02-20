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
