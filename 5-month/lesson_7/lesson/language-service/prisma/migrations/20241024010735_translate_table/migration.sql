/*
  Warnings:

  - You are about to drop the `language` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "language";

-- CreateTable
CREATE TABLE "translate" (
    "id" UUID NOT NULL DEFAULT GEN_RANDOM_UUID(),
    "code" VARCHAR NOT NULL,
    "type" "TranslateType" NOT NULL DEFAULT 'content',

    CONSTRAINT "translate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "translate_code_key" ON "translate"("code");
