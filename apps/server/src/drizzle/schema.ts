import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const organizations = sqliteTable('organizations', {
   id: integer('id').primaryKey(),
   name: text('name').notNull(),
   slug: text('slug').notNull(),
});

export const projects = sqliteTable('projects', {
   id: integer('id').primaryKey(),
   name: text('name').notNull(),
   description: text('description').notNull(),
});

export type InsertProject = typeof projects.$inferInsert;
export type SelectProjects = typeof projects.$inferSelect;
export const apiProject = createInsertSchema(projects, { name: z.string() });
export const apiCreateProject = apiProject.omit({ id: true });

export type InsertOrganization = typeof organizations.$inferInsert;
export type SelectOrganizations = typeof organizations.$inferSelect;
export const apiOrganization = createInsertSchema(organizations, { name: z.string() });
export const apiCreateOrganization = apiOrganization.omit({ id: true, slug: true });
