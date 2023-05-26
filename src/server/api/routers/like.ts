import prisma from "lib/prisma";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const likeRouter = createTRPCRouter({
  // いいねする

  // いいね数を取得する
  getLikeCount: protectedProcedure
    .input(z.object({ userName: z.string() }))
    .query(async ({ input }) => {
      const likeCount = await prisma.like.count({
        where: {
          user: {
            name: input.userName,
          },
        },
      });
      return likeCount;
    }),
});
