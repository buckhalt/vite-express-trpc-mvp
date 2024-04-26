import { cleanEnv } from 'envalid';

const { isProd } = cleanEnv(process.env, {});

export class HttpService {
   private static readonly hostname = 'https://studio-server-a2l0.onrender.com';

   private static readonly serverPort = 3001;

   private static readonly clientPort = 3000;

   public static readonly serverUrl = isProd ? `https://${this.hostname}` : `http://localhost:${this.serverPort}`;

   public static readonly clientUrl = isProd ? `https://${this.hostname}` : `http://localhost:${this.clientPort}`;
}
