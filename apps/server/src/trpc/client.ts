import { createTRPCClient, httpLink } from '@trpc/client';

import { type AppRouter } from './api/router';

const serverUrl = process.env.NODE_ENV === 'production' ? 'https://studio-mvp.vercel.app' : 'http://localhost:3001';

export const client = createTRPCClient<AppRouter>({ links: [httpLink({ url: `${serverUrl}/trpc` })] });
