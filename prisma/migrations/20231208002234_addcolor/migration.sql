/*
  Warnings:

  - Added the required column `color` to the `Shoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoes" ADD COLUMN     "color" TEXT NOT NULL;
