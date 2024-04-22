import { db } from 'db/db'
import { apiCreateProject, projects } from 'db/schema'

import { publicProcedure, router } from 'trpc'

export const projectsRouter = router({
   create: publicProcedure.input(apiCreateProject).mutation(async req => {
      return await db.insert(projects).values(req.input).returning()
   }),

   getAll: publicProcedure.query(async () => {
      return await db.select(projects)
   }),
})
