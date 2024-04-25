import { initTRPC } from '@trpc/server'

const t = initTRPC.context().create()

export const publicProcedure = t.procedure

export const { middleware, router } = t
