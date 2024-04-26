import { createTRPCClient, httpLink } from '@trpc/client';
import { HttpService } from '@studio/config';
import { type AppRouter } from './api/router';

export const client = createTRPCClient<AppRouter>({ links: [httpLink({ url: `${HttpService.serverUrl}/trpc` })] });
