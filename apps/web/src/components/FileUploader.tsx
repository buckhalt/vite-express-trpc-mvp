import { UploadButton } from '@/components/uploadthing';
import { trpc } from '@/trpc';

export const FileUploader = ({ projectSlug }: { projectSlug: string }) => {
   const utils = trpc.useUtils();

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
               createFile.mutateAsync({ name: file.name, key: file.key, url: file.url, projectSlug });
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
