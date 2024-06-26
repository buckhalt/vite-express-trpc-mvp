import { trpc } from '@/trpc'
import { QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'

import { useTrpc } from '@/hooks'

export const Providers = ({ children }: PropsWithChildren) => {
   const { trpcQueryClient, trpcClient } = useTrpc()

   return (
      <trpc.Provider client={trpcClient} queryClient={trpcQueryClient}>
         <QueryClientProvider client={trpcQueryClient}>{children}</QueryClientProvider>
      </trpc.Provider>
   )
}
