import { Link, createFileRoute } from '@tanstack/react-router';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { trpc } from '@/trpc';

import { CreateProject } from '@/components/CreateProject';

export const Route = createFileRoute('/$organization/')({
   component: OrganizationDashboard,
});

function OrganizationDashboard() {
   const { organization } = Route.useParams();
   const { data } = trpc.project.getAllByOrgSlug.useQuery({ orgSlug: organization });
   return (
      <div className="flex flex-col p-12">
         <div className="flex justify-between">
            <h1 className="text-3xl font-medium pb-2"> Projects for {organization}</h1>
            <div className="flex flex-row space-x-2">
               <CreateProject />
            </div>
         </div>
         <div className="grid grid-cols-4 space-x-4 space-y-4">
            {data?.map(project => (
               <Link to={`/${organization}/${project.slug}`} key={project.id}>
                  <Card className="hover:bg-secondary">
                     <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                     </CardHeader>
                  </Card>
               </Link>
            ))}
         </div>
      </div>
   );
}
