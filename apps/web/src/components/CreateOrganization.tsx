import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { trpc } from '@/trpc';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function CreateOrganization() {
   const [orgName, setOrgName] = useState('');

   const [open, setOpen] = useState(false);

   const createOrganization = trpc.organization.create.useMutation();

   const handleCreateOrg = async () => {
      try {
         await createOrganization.mutateAsync({ name: orgName });
         setOpen(false);
      } catch (error) {
         console.error('Error creating org:', error);
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger>
            <Button variant="ghost">
               <Plus className="w-4" /> Create New Organization
            </Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Create Organization</DialogTitle>
               <DialogDescription>Create a new organization to manage your projects and teams.</DialogDescription>
            </DialogHeader>
            <form
               onSubmit={e => {
                  e.preventDefault();
                  void handleCreateOrg();
                  setOpen(false);
               }}
            >
               <Label>Organization Name</Label>
               <Input placeholder="Organization Name" className="mb-4" onChange={e => setOrgName(e.target.value)} />
               <Button type="submit">Create</Button>
            </form>
         </DialogContent>
      </Dialog>
   );
}
