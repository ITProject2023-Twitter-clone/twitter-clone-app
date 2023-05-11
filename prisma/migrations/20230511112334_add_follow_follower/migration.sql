/*
  Warnings:

  - The primary key for the `followers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `followers` table. All the data in the column will be lost.
  - The `follower_id` column on the `followers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `follows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `follows` table. All the data in the column will be lost.
  - The `follow_id` column on the `follows` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[user_id]` on the table `followers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `follows` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `follower_user_id` to the `followers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following_user_id` to the `follows` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "followers" DROP CONSTRAINT "followers_pkey",
DROP COLUMN "created_at",
ADD COLUMN     "follower_user_id" TEXT NOT NULL,
DROP COLUMN "follower_id",
ADD COLUMN     "follower_id" SERIAL NOT NULL,
ADD CONSTRAINT "followers_pkey" PRIMARY KEY ("follower_id");

-- AlterTable
ALTER TABLE "follows" DROP CONSTRAINT "follows_pkey",
DROP COLUMN "created_at",
ADD COLUMN     "following_user_id" TEXT NOT NULL,
DROP COLUMN "follow_id",
ADD COLUMN     "follow_id" SERIAL NOT NULL,
ADD CONSTRAINT "follows_pkey" PRIMARY KEY ("follow_id");

-- CreateIndex
CREATE UNIQUE INDEX "followers_user_id_key" ON "followers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "follows_user_id_key" ON "follows"("user_id");

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_following_user_id_fkey" FOREIGN KEY ("following_user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_follower_user_id_fkey" FOREIGN KEY ("follower_user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
