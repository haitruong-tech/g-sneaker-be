-- CreateTable
CREATE TABLE "Shoes" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(32,2) NOT NULL,

    CONSTRAINT "Shoes_pkey" PRIMARY KEY ("id")
);
