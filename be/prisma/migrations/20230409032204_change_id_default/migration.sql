CREATE EXTENSION IF NOT EXISTS "uuid-ossp";-- AlterTable
ALTER TABLE
    "price_entry"
ALTER COLUMN
    "id"
SET
    DEFAULT uuid_generate_v4();-- AlterTable
ALTER TABLE
    "price_indexer"
ALTER COLUMN
    "id"
SET
    DEFAULT uuid_generate_v4();