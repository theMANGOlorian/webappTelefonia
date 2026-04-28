-- docker cp .\schema.sql postgres-db:/database-schema/schema.sql
--CREATE DOMAIN EMAILSTR AS TEXT CHECK ( VALUE ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$' );
--CREATE DOMAIN ALFNUM_255 AS VARCHAR(255) CHECK ( VALUE ~ '^[a-zA-Z0-9]$' );
-- CREATE DOMAIN PARTITAIVA AS VARCHAR(13) CHECK ( VALUE ~ '^[a-z0-9]{11,}$' );

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
-- DOMAIN: PARTITAIVA
-- =========================

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'partitaiva'
    ) THEN
    CREATE DOMAIN partitaiva AS VARCHAR(13)
    CHECK (
        VALUE ~ '^[a-z0-9]{11,}$'
    );
END IF;
END$$;

-- =========================
-- EXTENSIONS
-- =========================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =========================
-- TABLE USERS
-- =========================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username alfnum_255 NOT NULL UNIQUE,
    email emailstr NOT NULL UNIQUE,
    name alfnum_255 NOT NULL,
    surname alfnum_255 NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    isNegoziante BOOLEAN DEFAULT false NOT NULL,
    piva PARTITAIVA,
    CHECK ( (isNegoziante AND piva IS NOT NULL) OR (NOT isNegoziante AND piva IS NULL) )
);