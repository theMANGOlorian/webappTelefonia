/* docker cp .\schema.sql postgres-db:/database-schema/schema.sql **/
CREATE DOMAIN IF NOT EXISTS EMAILSTR AS TEXT CHECK ( VALUE ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$' );
CREATE DOMAIN IF NOT EXISTS ALFNUM_255 AS VARCHAR(255) CHECK ( VALUE ~ '^[a-zA-Z0-9]$' );

CREATE TABLE IF NOT EXISTS users (
    id_user SERIAL PRIMARY KEY,
    username ALFNUM_255 NOT NULL UNIQUE,
    email EMAILSTR NOT NULL UNIQUE,
    name ALFNUM_255 NOT NULL,
    surname ALFNUM_255 NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
