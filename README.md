# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
# twitter-clone-app

## ブランチ命名規則

参考サイト：[git-flow 図解](https://zenn.dev/yuki0410/articles/3360a6078d8e8c)

| ブランチ名 | 意図 | 派生元 | マージ先 |
| :-- | :-- | :-- | :-- |
| main | 現公開 | - | - |
| release | 次公開準備 | develop | main<br>develop |
| hotfix/* | 緊急修正 | main | main<br>develop |
| develop | 開発 | main | release |
| fix/* | 修正 | develop | develop |
| feature/* | 機能追加 | develop | develop |

`*` には操作対象となる名称を付与する．
