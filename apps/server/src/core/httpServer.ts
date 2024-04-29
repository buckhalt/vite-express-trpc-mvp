import express, { Application } from 'express';
import http from 'http';
import cors from 'cors';
import { createRouteHandler } from 'uploadthing/express';
import { uploadRouter } from '../uploadthing';
import { PORT } from 'env';

export function createHttpServer(): { app: Application } {
   const app = express();

   // @ts-ignore
   app.use(cors());
   app.use(
      '/api/uploadthing',
      createRouteHandler({
         router: uploadRouter,
         config: {},
      })
   );

   const server = http.createServer(app);

   server.listen(PORT, () => console.log(`🚀 Server has launched`));

   return { app };
}
