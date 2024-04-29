import 'dotenv/config';
import '../aliases';
import { createHttpServer } from '../core/httpServer';
import { configureMiddlewares } from '../middlewares';

const { app } = createHttpServer();

configureMiddlewares(app);
