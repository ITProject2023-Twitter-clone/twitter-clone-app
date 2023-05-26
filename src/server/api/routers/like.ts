import prisma from "lib/prisma";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const likeRouter = createTRPCRouter({
  // いいねする
  likeTweet: protectedProcedure
    .input(z.object({ tweetId: z.string() }))
    .output(
      z.object({
        tweetId: z.string(),
        createdAt: z.date(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const like = await prisma.like.create({
        data: {
          userId: ctx.session.user.id,
          tweetId: input.tweetId,
        },
        select: {
          tweetId: true,
          createdAt: true,
        },
      });
      return like;
    }),

  // いいねを解除する

  // いいね数を取得する
  getLikeCount: protectedProcedure
    .input(z.object({ tweetId: z.string() }))
    .output(z.number())
    .query(async ({ input }) => {
      const likeCount = await prisma.like.count({
        where: {
          tweetId: input.tweetId,
        },
      });
      return likeCount;
    }),
});
