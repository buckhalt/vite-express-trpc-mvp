import { eq } from 'drizzle-orm';
import { db } from 'drizzle/db';
import { apiCreateProject, organizations, projects } from 'drizzle/schema';

import { publicProcedure, router } from 'trpc';
import { z } from 'zod';

export const projectsRouter = router({
   create: publicProcedure.input(apiCreateProject).mutation(async req => {
      const { name, description, orgSlug } = req.input;

      const organizationId = await getOrganizationIdFromSlug(orgSlug);

      const projectSlug = name.toLowerCase().replace(/\s/g, '-');

      return await db
         .insert(projects)
         .values({
            name,
            slug: projectSlug,
            description,
            organizationId,
         })
         .returning();
   }),

   getBySlug: publicProcedure.input(z.object({ projectSlug: z.string() })).query(async req => {
      const { projectSlug } = req.input;

      const project = await db.select().from(projects).where(eq(projects.slug, projectSlug));
      // todo: projectSlug is unique, so we can just get one project from db instead of array
      return project[0];
   }),

   getAllByOrgSlug: publicProcedure.input(z.object({ orgSlug: z.string() })).query(async req => {
      const { orgSlug } = req.input;

      const organizationId = await getOrganizationIdFromSlug(orgSlug);

      const allOrgProjects = await db.select().from(projects).where(eq(projects.organizationId, organizationId));
      return allOrgProjects;
   }),
});

// helper function to get organizationId from orgSlug
const getOrganizationIdFromSlug = async (orgSlug: string) => {
   // todo: only select one, assuming slug is unique
   const orgsWithSlug = await db.select().from(organizations).where(eq(organizations.slug, orgSlug));
   return orgsWithSlug[0].id;
};

export const getProjectIdFromSlug = async (projectSlug: string) => {
   // todo: only select one, assuming slug is unique
   const projectsWithSlug = await db.select().from(projects).where(eq(projects.slug, projectSlug));
   return projectsWithSlug[0].id;
};
