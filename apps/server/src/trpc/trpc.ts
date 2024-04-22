import { initTRPC } from '@trpc/server'

import { type Context } from './api/router'

const t = initTRPC.context<Context>().create()

export const publicProcedure = t.procedure

export const { middleware, router } = t
