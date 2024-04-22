import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { trpc } from '@/trpc'

import { CreateOrganization } from './CreateOrganization'

export function OrganizationSwitcher() {
   const { data } = trpc.organization.getAll.useQuery()

   return (
      <Select>
         <SelectTrigger className="w-64">
            <SelectValue placeholder="Select an Organization" />
         </SelectTrigger>
         <SelectContent>
            {data?.map(org => (
               <SelectItem key={org?.id} value={org?.name}>
                  {org?.name}
               </SelectItem>
            ))}
            <CreateOrganization />
         </SelectContent>
      </Select>
   )
}
