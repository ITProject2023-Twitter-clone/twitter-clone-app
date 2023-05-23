/*
  Warnings:

  - You are about to drop the column `icon_path` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "icon_path",
ADD COLUMN     "image_path" TEXT;
