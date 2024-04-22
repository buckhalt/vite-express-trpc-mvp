import { trpc } from 'trpc'

export const Home = () => {
   const { data } = trpc.project.getAll.useQuery()

   return <div>All projects:</div>
}
