/*
  Warnings:

  - Added the required column `price` to the `investment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `investment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "investment" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" DOUBLE PRECISION NOT NULL;
