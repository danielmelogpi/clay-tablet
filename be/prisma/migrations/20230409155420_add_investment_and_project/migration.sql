/*
  Warnings:

  - Added the required column `price` to the `price_entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "price_entry" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "investment" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "priceIndexerId" UUID NOT NULL,
    "startDate" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "liquidationDate" TIMESTAMPTZ,

    CONSTRAINT "investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "dueDate" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "investment" ADD CONSTRAINT "investment_priceIndexerId_fkey" FOREIGN KEY ("priceIndexerId") REFERENCES "price_indexer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
