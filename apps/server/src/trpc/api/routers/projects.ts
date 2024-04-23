import { eq } from 'drizzle-orm';
import { db } from 'drizzle/db';
import { apiCreateProject, apiGetProjectsBySlug, organizations, projects } from 'drizzle/schema';

import { publicProcedure, router } from 'trpc';

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

   getBySlug: publicProcedure.input(apiGetProjectsBySlug).query(async req => {
      console.log('req.input', req.input);
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
