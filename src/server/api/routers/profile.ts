import { PrismaClient } from "@prisma/client";
import { protectedProcedure } from "~/server/api/trpc";
import { createTRPCRouter } from "../trpc";

const prisma = new PrismaClient();

// ログイン中のユーザーのプロフィール情報を取得
export const profileRouter = createTRPCRouter({
  getMyProfile: protectedProcedure.query(async ({ ctx }) => {
    const profile = await prisma.profile.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        user: {
          select: {
            displayName: true,
          },
        },
        socialAccount: true,
      },
    });
    return profile;
  }),
  // 任意のnameのプロフィール情報をreturnする
  // getProfileByName: protectedProcedure
  //   .input(z.object({ name: z.string() }))
  //   .query(async ({ input }) => {
  //     const profile = await prisma.user.findMany({
  //       where: { name: input.name },
  //       select: {
  //         displayName: true,
  //         profile: true,
  //       },
  //     });
  //     return profile;
  //   }),
  // プロフィールを編集する
  /**
   * 入力値
   * Profile
   * - bio string
   * - cover_image
   * - location string
   * - websiteUrl string
   * User
   * - displayName string
   * SocialAccount
   * - githubUrl string
   * - qiitaUrl string
   * - zennUrl string
   * - twitterUrl string
   * トップアドレスが正しいかvalidation
   */
});
