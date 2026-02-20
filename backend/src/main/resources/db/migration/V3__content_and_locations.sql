ALTER TABLE home_collection_requests
    ADD COLUMN IF NOT EXISTS status VARCHAR(20) NOT NULL DEFAULT 'NEW';

CREATE TABLE IF NOT EXISTS wellness_packages (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    original_price DECIMAL(10,2) NOT NULL,
    discount_price DECIMAL(10,2) NOT NULL,
    profiles_count INT NOT NULL,
    tests_count INT NOT NULL,
    parameters_count INT NOT NULL,
    gender VARCHAR(30) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_wellness_packages_active (is_active)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS blogs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(220) NOT NULL UNIQUE,
    summary VARCHAR(300) NOT NULL,
    content TEXT NOT NULL,
    is_published BOOLEAN NOT NULL DEFAULT TRUE,
    published_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_blogs_published (is_published, published_at)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS cities (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS areas (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    city_id BIGINT NOT NULL,
    name VARCHAR(120) NOT NULL,
    UNIQUE KEY uk_areas_city_name (city_id, name),
    FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS labs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    area_id BIGINT NOT NULL,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(300) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_labs_active (is_active),
    FOREIGN KEY (area_id) REFERENCES areas(id) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO wellness_packages (name, original_price, discount_price, profiles_count, tests_count, parameters_count, gender, is_active)
SELECT * FROM (
    SELECT 'HEALTHKIND TOTAL PLUS', 8525.00, 2249.00, 12, 15, 87, 'MALE,FEMALE', TRUE
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM wellness_packages WHERE name = 'HEALTHKIND TOTAL PLUS');

INSERT INTO wellness_packages (name, original_price, discount_price, profiles_count, tests_count, parameters_count, gender, is_active)
SELECT * FROM (
    SELECT 'HEALTHKIND ADVANCE', 11915.00, 4999.00, 15, 19, 97, 'MALE,FEMALE', TRUE
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM wellness_packages WHERE name = 'HEALTHKIND ADVANCE');

INSERT INTO wellness_packages (name, original_price, discount_price, profiles_count, tests_count, parameters_count, gender, is_active)
SELECT * FROM (
    SELECT 'HEALTHKIND PLATINUM', 13855.00, 5999.00, 16, 21, 99, 'MALE,FEMALE', TRUE
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM wellness_packages WHERE name = 'HEALTHKIND PLATINUM');

INSERT INTO wellness_packages (name, original_price, discount_price, profiles_count, tests_count, parameters_count, gender, is_active)
SELECT * FROM (
    SELECT 'HEALTHKIND COMPLETE', 10065.00, 3299.00, 13, 17, 92, 'MALE,FEMALE', TRUE
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM wellness_packages WHERE name = 'HEALTHKIND COMPLETE');

INSERT INTO blogs (title, slug, summary, content, is_published, published_at)
SELECT * FROM (
    SELECT
        'Top 7 Annual Blood Tests You Should Not Skip',
        'top-7-annual-blood-tests',
        'A quick guide to preventive blood tests every adult should take annually.',
        'Preventive diagnostics reduce long-term health risks. This article covers CBC, lipid profile, thyroid, sugar, liver and kidney markers, and when to repeat them.',
        TRUE,
        NOW()
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM blogs WHERE slug = 'top-7-annual-blood-tests');

INSERT INTO blogs (title, slug, summary, content, is_published, published_at)
SELECT * FROM (
    SELECT
        'How to Prepare for a Full Body Checkup',
        'prepare-for-full-body-checkup',
        'Best practices before sample collection to improve report accuracy.',
        'Preparation includes fasting windows, hydration, medication disclosure, and proper sample timing. Follow these steps for accurate reports.',
        TRUE,
        NOW()
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM blogs WHERE slug = 'prepare-for-full-body-checkup');

INSERT INTO cities (name)
SELECT * FROM (
    SELECT 'Gurgaon'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cities WHERE name = 'Gurgaon');

INSERT INTO cities (name)
SELECT * FROM (
    SELECT 'Lucknow'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cities WHERE name = 'Lucknow');

INSERT INTO areas (city_id, name)
SELECT c.id, 'Sector 42'
FROM cities c
WHERE c.name = 'Gurgaon'
  AND NOT EXISTS (
      SELECT 1
      FROM areas a
      WHERE a.city_id = c.id AND a.name = 'Sector 42'
  );

INSERT INTO areas (city_id, name)
SELECT c.id, 'Sector 3'
FROM cities c
WHERE c.name = 'Gurgaon'
  AND NOT EXISTS (
      SELECT 1
      FROM areas a
      WHERE a.city_id = c.id AND a.name = 'Sector 3'
  );

INSERT INTO areas (city_id, name)
SELECT c.id, 'Gomti Nagar'
FROM cities c
WHERE c.name = 'Lucknow'
  AND NOT EXISTS (
      SELECT 1
      FROM areas a
      WHERE a.city_id = c.id AND a.name = 'Gomti Nagar'
  );

INSERT INTO labs (area_id, name, address, is_active)
SELECT a.id, 'Patho Test Diagnostic - Sector 42', 'Sector 42, Gurgaon', TRUE
FROM areas a
JOIN cities c ON c.id = a.city_id
WHERE c.name = 'Gurgaon'
  AND a.name = 'Sector 42'
  AND NOT EXISTS (
      SELECT 1 FROM labs l WHERE l.area_id = a.id AND l.name = 'Patho Test Diagnostic - Sector 42'
  );

INSERT INTO labs (area_id, name, address, is_active)
SELECT a.id, 'Patho Test Collection Point - Sector 3', 'Sector 3, Gurgaon', TRUE
FROM areas a
JOIN cities c ON c.id = a.city_id
WHERE c.name = 'Gurgaon'
  AND a.name = 'Sector 3'
  AND NOT EXISTS (
      SELECT 1 FROM labs l WHERE l.area_id = a.id AND l.name = 'Patho Test Collection Point - Sector 3'
  );

INSERT INTO labs (area_id, name, address, is_active)
SELECT a.id, 'Patho Test Lab - Gomti Nagar', 'Gomti Nagar, Lucknow', TRUE
FROM areas a
JOIN cities c ON c.id = a.city_id
WHERE c.name = 'Lucknow'
  AND a.name = 'Gomti Nagar'
  AND NOT EXISTS (
      SELECT 1 FROM labs l WHERE l.area_id = a.id AND l.name = 'Patho Test Lab - Gomti Nagar'
  );

INSERT INTO test_categories (name)
SELECT * FROM (
    SELECT 'General Health'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM test_categories WHERE name = 'General Health');

INSERT INTO tests (category_id, code, name, description, price, duration_hrs, is_active)
SELECT tc.id, 'CBC01', 'Complete Blood Count', 'Measures red cells, white cells, platelets and hemoglobin.', 399.00, 24, TRUE
FROM test_categories tc
WHERE tc.name = 'General Health'
  AND NOT EXISTS (SELECT 1 FROM tests WHERE code = 'CBC01');

INSERT INTO tests (category_id, code, name, description, price, duration_hrs, is_active)
SELECT tc.id, 'LIPID01', 'Lipid Profile', 'Evaluates cholesterol and triglyceride levels for cardiac risk.', 699.00, 24, TRUE
FROM test_categories tc
WHERE tc.name = 'General Health'
  AND NOT EXISTS (SELECT 1 FROM tests WHERE code = 'LIPID01');

INSERT INTO tests (category_id, code, name, description, price, duration_hrs, is_active)
SELECT tc.id, 'THY01', 'Thyroid Profile', 'Checks thyroid hormone levels for metabolism and energy.', 799.00, 24, TRUE
FROM test_categories tc
WHERE tc.name = 'General Health'
  AND NOT EXISTS (SELECT 1 FROM tests WHERE code = 'THY01');
