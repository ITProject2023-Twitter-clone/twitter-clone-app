-- AlterTable
ALTER TABLE "followers" ADD CONSTRAINT "followers_pkey" PRIMARY KEY ("user_id", "follower_user_id");

-- AlterTable
ALTER TABLE "follows" ADD CONSTRAINT "follows_pkey" PRIMARY KEY ("user_id", "following_user_id");
