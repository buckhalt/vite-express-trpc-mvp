import { db } from 'drizzle/db'
import { apiCreateOrganization, organizations } from 'drizzle/schema'

import { publicProcedure, router } from 'trpc'

export const organizationsRouter = router({
   create: publicProcedure.input(apiCreateOrganization).mutation(async req => {
      return await db.insert(organizations).values(req.input).returning()
   }),

   getAll: publicProcedure.query(async () => {
      const allOrganizations = await db.select().from(organizations)
      return allOrganizations
   }),
})
