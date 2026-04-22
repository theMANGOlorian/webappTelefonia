/* docker cp .\schema.sql postgres-db:/database-schema/schema.sql **/
-- =========================
-- DOMAIN: EMAIL
-- =========================
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'emailstr'
    ) THEN
    CREATE DOMAIN emailstr AS TEXT
    CHECK (
        VALUE ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$'
    );
END IF;
END$$;

-- =========================
-- DOMAIN: ALFANUMERICO
-- =========================
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'alfnum_255'
    ) THEN
    CREATE DOMAIN alfnum_255 AS VARCHAR(255)
    CHECK (
        VALUE ~ '^[a-zA-Z0-9]{1,255}$'
    );
END IF;
END$$;

-- =========================
-- TABLE USERS
-- =========================
CREATE TABLE IF NOT EXISTS users (
     id_user SERIAL PRIMARY KEY,
     username alfnum_255 NOT NULL UNIQUE,
     email emailstr NOT NULL UNIQUE,
     name alfnum_255 NOT NULL,
     surname alfnum_255 NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);