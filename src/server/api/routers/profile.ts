import { PrismaClient } from "@prisma/client";
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
});

// 任意のuserIdのプロフィール情報をreturnする

// プロフィールを編集する
