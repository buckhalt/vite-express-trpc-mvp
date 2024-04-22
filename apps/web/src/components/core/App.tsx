import { Home } from '@/components/pages'
import { Outlet, RootRoute, Route, Router, RouterProvider } from '@tanstack/router'

const rootRoute = new RootRoute({ component: () => <Outlet /> })

const home = new Route({
   getParentRoute: () => rootRoute,
   path: '/',
   component: Home,
})

const routeTree = rootRoute.addChildren([home])

const router = new Router({ routeTree })

window.navigate = router.navigate

export const App = () => <RouterProvider router={router} />

declare global {
   interface Window {
      navigate: typeof router.navigate
   }
}

declare module '@tanstack/router' {
   interface Register {
      router: typeof router
   }
}
