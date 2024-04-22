import { Button } from '@/components/ui/button'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { trpc } from '@/trpc'
import { useState } from 'react'

export function CreateProject() {
   const [projectName, setProjectName] = useState('')

   const [open, setOpen] = useState(false)

   const createProject = trpc.project.create.useMutation()

   const handleCreateProject = async () => {
      try {
         await createProject.mutateAsync({ name: projectName })
         setOpen(false)
      } catch (error) {
         console.error('Error creating project:', error)
      }
   }

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger>
            <Button variant="outline">+ Create Project</Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Create Project</DialogTitle>
               <DialogDescription>Create a new project.</DialogDescription>
            </DialogHeader>
            <form
               onSubmit={e => {
                  e.preventDefault()
                  void handleCreateProject()

                  setOpen(false)
               }}
            >
               <Label>Project Name</Label>
               <Input placeholder="Project Name" className="mb-4" onChange={e => setProjectName(e.target.value)} />
               <Button type="submit">Create</Button>
            </form>
         </DialogContent>
      </Dialog>
   )
}
