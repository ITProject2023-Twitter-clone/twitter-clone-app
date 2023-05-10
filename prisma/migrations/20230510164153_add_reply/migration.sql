/*
  Warnings:

  - The primary key for the `likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `retweets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tweets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updated_at` to the `tweets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_tweet_id_fkey";

-- DropForeignKey
ALTER TABLE "retweets" DROP CONSTRAINT "retweets_tweet_id_fkey";

-- AlterTable
ALTER TABLE "likes" DROP CONSTRAINT "likes_pkey",
ALTER COLUMN "tweet_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "likes_pkey" PRIMARY KEY ("user_id", "tweet_id");

-- AlterTable
ALTER TABLE "retweets" DROP CONSTRAINT "retweets_pkey",
ALTER COLUMN "tweet_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "retweets_pkey" PRIMARY KEY ("user_id", "tweet_id");

-- AlterTable
ALTER TABLE "tweets" DROP CONSTRAINT "tweets_pkey",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "tweet_id" DROP DEFAULT,
ALTER COLUMN "tweet_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tweets_pkey" PRIMARY KEY ("tweet_id");
DROP SEQUENCE "tweets_tweet_id_seq";

-- CreateTable
CREATE TABLE "replies" (
    "reply_id" TEXT NOT NULL,
    "tweet_id" TEXT NOT NULL,
    "root_tweet_id" TEXT NOT NULL,

    CONSTRAINT "replies_pkey" PRIMARY KEY ("reply_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "replies_tweet_id_key" ON "replies"("tweet_id");

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_tweet_id_fkey" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_root_tweet_id_fkey" FOREIGN KEY ("root_tweet_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_tweet_id_fkey" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retweets" ADD CONSTRAINT "retweets_tweet_id_fkey" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("tweet_id") ON DELETE CASCADE ON UPDATE CASCADE;
