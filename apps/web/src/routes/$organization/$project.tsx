import { createFileRoute } from '@tanstack/react-router';
import { trpc } from '@/trpc';
import { FileUploader } from '@/components/FileUploader';

export const Route = createFileRoute('/$organization/$project')({
   component: ProjectsDashboard,
});

function ProjectsDashboard() {
   const { organization, project } = Route.useParams();
   const { data: projectData } = trpc.project.getBySlug.useQuery({ projectSlug: project });
   const { data: filesData } = trpc.file.getAllByProjectsSlug.useQuery({ projectSlug: project });
   if (!projectData) {
      return null;
   }
   return (
      <div className="p-12">
         <div className="flex justify-between">
            <div className="flex flex-col">
               <h1 className="text-3xl font-medium">{projectData.name}</h1>
               <div className="text-muted-foreground">Description: {projectData.description}</div>
            </div>
            <FileUploader />
         </div>
         <div>
            <div className="grid grid-cols-3 gap-4">
               {filesData?.map(file => (
                  <div key={file.id} className="border p-4 rounded-md">
                     <img src={file.url} alt={file.name} className="w-full h-32 object-cover rounded-md" />
                     <div className="text-lg font-medium">{file.name}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
