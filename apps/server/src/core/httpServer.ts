import express from 'express';
import http from 'http';

const cors = require('cors');

import { createRouteHandler } from 'uploadthing/express';

import { uploadRouter } from '../uploadthing';

import { PORT } from 'env';

export class HttpServer {
   public static create() {
      const app = express();

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
}
