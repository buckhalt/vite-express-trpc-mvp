import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import type { Application } from 'express'

import { router } from 'trpc'

import { projectsRouter } from './routers/projects'

export type AppRouter = typeof appRouter

export type Context = inferAsyncReturnType<typeof createContext>

const appRouter = router({ project: projectsRouter })

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
   req,
   res,
})

export const initializeTrpc = async (app: Application) => {
   app.use(
      '/trpc',
      createExpressMiddleware({
         router: appRouter,
         createContext,
      })
   )
}
