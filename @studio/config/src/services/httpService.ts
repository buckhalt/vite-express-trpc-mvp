import { cleanEnv } from 'envalid';

const { isProd } = cleanEnv(process.env, {});
console.log('isProd', isProd);

export class HttpService {
   private static readonly host = 'http://localhost:3004';

   private static readonly serverPort = 3001;

   private static readonly clientPort = 3000;

   public static readonly serverUrl = isProd ? `https://${this.host}` : `http://localhost:${this.serverPort}`;

   public static readonly clientUrl = isProd ? `https://${this.host}` : `http://localhost:${this.clientPort}`;
}
