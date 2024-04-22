import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const projects = sqliteTable('projects', {
   id: integer('id').primaryKey(),
   name: text('name').notNull(),
})

export type InsertProject = typeof projects.$inferInsert
export type SelectProjects = typeof projects.$inferSelect
export const apiProject = createInsertSchema(projects, { name: z.string() })
export const apiCreateProject = apiProject.omit({ id: true })
