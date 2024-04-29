import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import { join, resolve } from 'path';

import { RequestHandler } from 'express-serve-static-core';

import { isProd } from 'env';

import { initializeTrpc } from 'trpc/api/router';

export function configureMiddlewares(app: Application) {
   app.use(cookieParser() as RequestHandler);

   initializeTrpc(app);

   if (isProd) {
      serveWeb(app);
   }
}

function serveWeb(app: Application) {
   const buildPath = resolve(__dirname, '../../../../web/dist');

   app.use(express.static(buildPath) as unknown as RequestHandler);

   app.get('*', (_, res) => res.sendFile(join(buildPath, 'index.html')));
}
