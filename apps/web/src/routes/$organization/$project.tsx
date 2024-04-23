import { createFileRoute } from '@tanstack/react-router';
import { trpc } from '@/trpc';

export const Route = createFileRoute('/$organization/$project')({
   component: ProjectsDashboard,
});

function ProjectsDashboard() {
   const { organization, project } = Route.useParams();
   const { data } = trpc.project.getBySlug.useQuery({ projectSlug: project });
   if (!data) {
      return null;
   }
   return (
      <div className="flex flex-col p-12">
         <div className="flex flex-col justify-between">
            <h1 className="text-3xl font-medium pb-2">{data.name}</h1>
            <div className="text-muted-foreground">Description: {data.description}</div>
            <div className="text-muted-foreground">Organization: {organization}</div>
            <div className="flex flex-row space-x-2"></div>
         </div>
      </div>
   );
}
