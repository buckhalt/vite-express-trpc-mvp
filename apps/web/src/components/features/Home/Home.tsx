import { trpc } from 'trpc'

export const Home = () => {
   const { data } = trpc.getRole.useQuery()

   return <div>Current role: {data?.role}</div>
}
