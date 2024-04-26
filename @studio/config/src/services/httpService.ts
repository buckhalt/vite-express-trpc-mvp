import { cleanEnv } from 'envalid';

const { isProd } = cleanEnv(process.env, {});

export class HttpService {
   private static readonly serverHost = 'https://studio-mvp-server.vercel.app';
   private static readonly clientHost = 'http://studio-mvp.vercel.app';

   private static readonly serverPort = 3001;

   private static readonly clientPort = 3000;

   public static readonly serverUrl = isProd ? `https://${this.serverHost}` : `http://localhost:${this.serverPort}`;

   public static readonly clientUrl = isProd ? `https://${this.clientHost}` : `http://localhost:${this.clientPort}`;
}
