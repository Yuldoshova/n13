-- CreateEnum
CREATE TYPE "TranslateType" AS ENUM ('content', 'error');

-- CreateTable
CREATE TABLE "language" (
    "id" UUID NOT NULL DEFAULT GEN_RANDOM_UUID(),
    "title" VARCHAR(64) NOT NULL,
    "image" VARCHAR,
    "code" VARCHAR(2) NOT NULL,

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "language_code_key" ON "language"("code");
