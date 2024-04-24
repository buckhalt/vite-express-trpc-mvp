import { Header } from '@/components/Header';
import { Providers } from '@/components/Providers';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Route = createRootRoute({
   component: () => (
      <Providers>
         <Header />
         <Outlet />
         <TanStackRouterDevtools />
         <ReactQueryDevtools initialIsOpen={false} />
      </Providers>
   ),
});
