import { db } from '../../../drizzle/db';
import { apiCreateOrganization, organizations } from '../../../drizzle/schema';

import { publicProcedure, router } from '../../../trpc';

export const organizationsRouter = router({
   create: publicProcedure.input(apiCreateOrganization).mutation(async req => {
      const { name } = req.input;
      const slug = name.toLowerCase().replace(/\s/g, '-');
      return await db
         .insert(organizations)
         .values({
            name,
            slug,
         })
         .returning();
   }),

   getAll: publicProcedure.query(async () => {
      const allOrganizations = await db.select().from(organizations);
      return allOrganizations;
   }),
});
