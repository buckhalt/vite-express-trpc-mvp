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
   slug: text('slug').notNull(),
   description: text('description').notNull(),
   organizationId: integer('organizationId').notNull(),
});

export const files = sqliteTable('files', {
   id: integer('id').primaryKey(),
   name: text('name').notNull(),
   key: text('key').notNull(),
   url: text('url').notNull(),
   projectId: integer('projectId').notNull(),
});

export type InsertProject = typeof projects.$inferInsert;
export type SelectProjects = typeof projects.$inferSelect;
export const apiProject = createInsertSchema(projects, { name: z.string() });
// This type could be simpler, but we would need to fetch the orgId using the slug from frontend
// This lets us use the orgSlug in the frontend and do the lookup on the backend
export const apiCreateProject = apiProject.pick({ name: true, description: true }).extend({ orgSlug: z.string() });

export type InsertOrganization = typeof organizations.$inferInsert;
export type SelectOrganizations = typeof organizations.$inferSelect;
export const apiOrganization = createInsertSchema(organizations, { name: z.string() });
export const apiCreateOrganization = apiOrganization.omit({ id: true, slug: true });

export type InsertFile = typeof files.$inferInsert;
export const apiFile = createInsertSchema(files, { name: z.string(), key: z.string(), url: z.string() });
export const apiCreateFile = apiFile.pick({ name: true, key: true, url: true }).extend({ projectSlug: z.string() });
