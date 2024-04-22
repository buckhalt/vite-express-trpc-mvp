import * as dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'

dotenv.config({ path: '.env' })

export default {
   schema: './src/drizzle/schema.ts',
   out: './migrations',
   driver: 'turso',
   dbCredentials: {
      url: process.env.TURSO_CONNECTION_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
   },
} as Config
