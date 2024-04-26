import { publicProcedure, router } from 'trpc';

export const helloRouter = router({
   world: publicProcedure.query(async () => {
      return 'world';
   }),
});
