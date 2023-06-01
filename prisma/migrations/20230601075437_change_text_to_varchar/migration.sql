/*
  Warnings:

  - You are about to alter the column `bio` on the `profiles` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(160)`.
  - You are about to alter the column `websiteUrl` on the `profiles` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `display_name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "bio" SET DATA TYPE VARCHAR(160),
ALTER COLUMN "websiteUrl" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "display_name" SET DATA TYPE VARCHAR(30);
