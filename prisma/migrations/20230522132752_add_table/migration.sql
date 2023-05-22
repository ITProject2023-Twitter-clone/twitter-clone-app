/*
  Warnings:

  - You are about to drop the column `explanation` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `header_path` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `body` on the `tweets` table. All the data in the column will be lost.
  - You are about to drop the column `parent_tweet_id` on the `tweets` table. All the data in the column will be lost.
  - You are about to drop the column `image_path` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `replies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sentence` to the `tweets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tweet_category_id` to the `tweets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_root_tweet_id_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_tweet_id_fkey";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "explanation",
DROP COLUMN "header_path",
DROP COLUMN "website",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "cover_image_path" TEXT,
ADD COLUMN     "websiteUrl" TEXT,
ALTER COLUMN "location" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tweets" DROP COLUMN "body",
DROP COLUMN "parent_tweet_id",
ADD COLUMN     "archive_at" TIMESTAMP(3),
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "is_archive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sentence" VARCHAR(1000) NOT NULL,
ADD COLUMN     "tweet_category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "image_path",
ADD COLUMN     "display_name" TEXT,
ADD COLUMN     "icon_path" TEXT;

-- DropTable
DROP TABLE "replies";

-- CreateTable
CREATE TABLE "social_accounts" (
    "user_id" TEXT NOT NULL,
    "githubUrl" TEXT,
    "qiitaUrl" TEXT,
    "zennUrl" TEXT,
    "twitterUrl" TEXT,

    CONSTRAINT "social_accounts_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "drafts" (
    "draft_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "sentence" VARCHAR(1000) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "drafts_pkey" PRIMARY KEY ("draft_id")
);

-- CreateTable
CREATE TABLE "draft_media" (
    "draft_media_id" TEXT NOT NULL,
    "draft_id" TEXT NOT NULL,
    "media_path" TEXT NOT NULL,

    CONSTRAINT "draft_media_pkey" PRIMARY KEY ("draft_media_id")
);

-- CreateTable
CREATE TABLE "tweet_media" (
    "media_id" TEXT NOT NULL,
    "tweet_id" TEXT NOT NULL,
    "media_path" TEXT NOT NULL,

    CONSTRAINT "tweet_media_pkey" PRIMARY KEY ("media_id")
);

-- CreateTable
CREATE TABLE "tree_paths" (
    "ancentor_id" TEXT NOT NULL,
    "descendant_id" TEXT NOT NULL,

    CONSTRAINT "tree_paths_pkey" PRIMARY KEY ("ancentor_id","descendant_id")
);

-- CreateTable
CREATE TABLE "tweet_categories" (
    "tweet_category_id" SERIAL NOT NULL,
    "tweet_category" TEXT NOT NULL,

    CONSTRAINT "tweet_categories_pkey" PRIMARY KEY ("tweet_category_id")
);

-- CreateTable
CREATE TABLE "quote_retweets" (
    "tweet_id" TEXT NOT NULL,
    "quote_tweet_id" TEXT NOT NULL,

    CONSTRAINT "quote_retweets_pkey" PRIMARY KEY ("tweet_id","quote_tweet_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tweet_categories_tweet_category_key" ON "tweet_categories"("tweet_category");

-- CreateIndex
CREATE UNIQUE INDEX "quote_retweets_tweet_id_key" ON "quote_retweets"("tweet_id");

-- AddForeignKey
ALTER TABLE "social_accounts" ADD CONSTRAINT "social_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drafts" ADD CONSTRAINT "drafts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_media" ADD CONSTRAINT "draft_media_draft_id_fkey" FOREIGN KEY ("draft_id") REFERENCES "drafts"("draft_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tweets" ADD CONSTRAINT "tweets_tweet_category_id_fkey" FOREIGN KEY ("tweet_category_id") REFERENCES "tweet_categories"("tweet_category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tweet_media" ADD CONSTRAINT "tweet_media_tweet_id_fkey" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tree_paths" ADD CONSTRAINT "tree_paths_ancentor_id_fkey" FOREIGN KEY ("ancentor_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tree_paths" ADD CONSTRAINT "tree_paths_descendant_id_fkey" FOREIGN KEY ("descendant_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote_retweets" ADD CONSTRAINT "quote_retweets_tweet_id_fkey" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote_retweets" ADD CONSTRAINT "quote_retweets_quote_tweet_id_fkey" FOREIGN KEY ("quote_tweet_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;
