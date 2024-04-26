import { cleanEnv } from 'envalid';

const { isProd } = cleanEnv(process.env, {});
// const HOSTNAME = process.env.HOSTNAME;

export class HttpService {
   private static readonly host = 'https://studio-mvp.vercel.app';

   private static readonly serverPort = 3001;

   private static readonly clientPort = 3000;

   public static readonly serverUrl = isProd ? `https://${this.host}` : `http://localhost:${this.serverPort}`;

   public static readonly clientUrl = isProd ? `https://${this.host}` : `http://localhost:${this.clientPort}`;
}
