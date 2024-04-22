import { trpc } from '@/trpc'

import { CreateProject } from './CreateProject'

export const Home = () => {
   const { data } = trpc.project.getAll.useQuery()

   return (
      <div className="flex flex-col p-12">
         <h1 className="text-3xl font-medium pb-2"> Studio MVP </h1>
         <h2 className="text-2xl font-medium pb-2">Vite + Express + tRPC + Drizzle + Turso </h2>
         <h3 className="text-xl font-medium pb-2">Projects</h3>
         <ul>
            {data?.map(project => (
               <li key={project.id}>{project.name}</li>
            ))}
         </ul>
         <CreateProject />
      </div>
   )
}
