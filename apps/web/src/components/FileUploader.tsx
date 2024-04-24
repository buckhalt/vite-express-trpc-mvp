import { UploadButton } from '@/components/uploadthing';
import { trpc } from '@/trpc';
import { useParams } from '@tanstack/react-router';

export const FileUploader = () => {
   const utils = trpc.useUtils();
   const { project } = useParams({ strict: false }); // need to use strict: false to denote that you want to access params from ambiguous location (outside route)

   const createFile = trpc.file.create.useMutation({
      onSuccess: () => {
         console.log('File created');
         utils.file.getAllByProjectsSlug.invalidate();
      },
   });

   return (
      <UploadButton
         className="mt-4 ut-button:bg-primary"
         endpoint="image"
         skipPolling
         onClientUploadComplete={uploadedFiles => {
            uploadedFiles.map(file => {
               createFile.mutateAsync({ name: file.name, key: file.key, url: file.url, projectSlug: project });
            });
            alert('Upload complete');
         }}
         onUploadError={error => {
            console.error(error, error.cause);
            alert('Upload failed');
         }}
      />
   );
};
