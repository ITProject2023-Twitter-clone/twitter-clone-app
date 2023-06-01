import prisma from "lib/prisma";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const followRouter = createTRPCRouter({
  // フォローする
  followUser: protectedProcedure
    .input(z.object({ targetUserName: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // フォロー対象のユーザーを取得
      const targetUser = await prisma.user.findUnique({
        where: { name: input.targetUserName },
      });

      // フォローする
      const follow = await prisma.follow.create({
        data: {
          user: { connect: { id: ctx.session.user.id } },
          followingUser: { connect: { id: targetUser?.id } },
        },
      });

      // フォローしたら、フォロワーテーブルにも追加する
      const follower = await prisma.follower.create({
        data: {
          user: { connect: { id: targetUser?.id } },
          followerUser: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  // フォロー数を取得する
  getFollowCount: protectedProcedure
    .input(z.object({ userName: z.string() }))
    .query(async ({ input }) => {
      const followCount = await prisma.follow.count({
        where: {
          user: { name: input.userName },
        },
      });
      return followCount;
    }),
});
