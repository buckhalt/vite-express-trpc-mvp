import { db } from 'drizzle/db'
import { apiCreateProject, projects } from 'drizzle/schema'

import { publicProcedure, router } from 'trpc'

export const projectsRouter = router({
   create: publicProcedure.input(apiCreateProject).mutation(async req => {
      return await db.insert(projects).values(req.input).returning()
   }),

   getAll: publicProcedure.query(async () => {
      const allProjects = await db.select().from(projects)
      return allProjects
   }),
})
