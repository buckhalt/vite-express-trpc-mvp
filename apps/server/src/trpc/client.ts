import { createTRPCClient, httpLink } from '@trpc/client';
import { type AppRouter } from './api/router';

export const client = createTRPCClient<AppRouter>({ links: [httpLink({ url: `${process.env.BACKEND_URL}/trpc` })] });
