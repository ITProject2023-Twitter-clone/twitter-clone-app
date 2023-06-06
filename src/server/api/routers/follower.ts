import prisma from "lib/prisma";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const followerRouter = createTRPCRouter({
  // フォロワー数を取得する
  getFollowerCount: protectedProcedure
    .input(z.object({ userName: z.string() }))
    .query(async ({ input }) => {
      const followerCount = await prisma.follower.count({
        where: { userId: input.userName },
      });

      return followerCount;
    }),
});
