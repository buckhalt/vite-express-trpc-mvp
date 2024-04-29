import { eq } from 'drizzle-orm';
import { db } from '../../../drizzle/db';
import { apiCreateFile, files } from '../../../drizzle/schema';
import { getProjectIdFromSlug } from './projects';

import { publicProcedure, router } from '../../../trpc';
import { z } from 'zod';

export const filesRouter = router({
   create: publicProcedure.input(apiCreateFile).mutation(async req => {
      const { name, key, url, projectSlug } = req.input;

      const projectId = await getProjectIdFromSlug(projectSlug);

      return await db
         .insert(files)
         .values({
            name,
            key,
            url,
            projectId,
         })
         .returning();
   }),

   getAllByProjectsSlug: publicProcedure.input(z.object({ projectSlug: z.string() })).query(async req => {
      const { projectSlug } = req.input;

      const projectId = await getProjectIdFromSlug(projectSlug);

      const allProjectFiles = await db.select().from(files).where(eq(files.projectId, projectId));
      return allProjectFiles;
   }),
});
