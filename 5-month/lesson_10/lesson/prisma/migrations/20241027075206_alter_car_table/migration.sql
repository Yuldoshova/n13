/*
  Warnings:

  - Added the required column `carTypeId` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "carTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_carTypeId_fkey" FOREIGN KEY ("carTypeId") REFERENCES "car_types"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
