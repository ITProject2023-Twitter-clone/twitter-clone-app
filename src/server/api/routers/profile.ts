import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";
import { createTRPCRouter } from "../trpc";

const prisma = new PrismaClient();

// ログイン中のユーザーのプロフィール情報を取得
export const profileRouter = createTRPCRouter({
  getMyProfile: protectedProcedure.query(async ({ ctx }) => {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return profile;
  }),
  // 任意のnameのプロフィール情報をreturnする
  getProfileByName: protectedProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const profile = await prisma.profile.findFirst({
        where: {
          user: {
            name: input.name,
          },
        },
      });
      return profile;
    }),
  // プロフィールを編集する
});
