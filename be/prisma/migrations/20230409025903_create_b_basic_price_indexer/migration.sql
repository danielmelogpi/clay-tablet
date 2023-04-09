-- CreateTable
CREATE TABLE "price_indexer" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "price_indexer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_entry" (
    "id" UUID NOT NULL,
    "priceIndexerId" UUID NOT NULL,

    CONSTRAINT "price_entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "price_indexer_code_key" ON "price_indexer"("code");

-- AddForeignKey
ALTER TABLE "price_entry" ADD CONSTRAINT "price_entry_priceIndexerId_fkey" FOREIGN KEY ("priceIndexerId") REFERENCES "price_indexer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
