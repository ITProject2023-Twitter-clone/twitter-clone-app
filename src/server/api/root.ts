import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { followRouter } from "./routers/follow";
import { likeRouter } from "./routers/like";
import { profileRouter } from "./routers/profile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  profile: profileRouter,
  like: likeRouter,
  follow: followRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
