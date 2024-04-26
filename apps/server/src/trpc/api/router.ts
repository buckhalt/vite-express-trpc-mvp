import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import type { Application } from 'express';

import { router } from 'trpc';

import { organizationsRouter } from './routers/organizations';
import { projectsRouter } from './routers/projects';
import { filesRouter } from './routers/files';
import { helloRouter } from './routers/hello';

export type AppRouter = typeof appRouter;

const appRouter = router({
   project: projectsRouter,
   organization: organizationsRouter,
   file: filesRouter,
   hello: helloRouter,
});

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
   req,
   res,
});

export const initializeTrpc = async (app: Application) => {
   app.use(
      '/trpc',
      createExpressMiddleware({
         router: appRouter,
         createContext,
      })
   );
};
