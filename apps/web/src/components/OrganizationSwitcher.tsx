import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { trpc } from '@/trpc';

import { CreateOrganization } from './CreateOrganization';
import { useNavigate, getRouteApi } from '@tanstack/react-router';
import { useMemo } from 'react';

export function OrganizationSwitcher() {
   const route = getRouteApi('/$organization/');
   const { organization } = route.useParams();

   const navigate = useNavigate();

   const { data } = trpc.organization.getAll.useQuery();

   const selectedOrg = useMemo(() => {
      return organization || '';
   }, [organization]);

   // route to organization page on select
   const selectOrg = (organization: string) => {
      navigate({ to: `/${organization}`, params: { organization } });
   };

   return (
      <Select onValueChange={selectOrg} value={selectedOrg}>
         <SelectTrigger className="w-64">
            <SelectValue placeholder="Select an Organization" />
         </SelectTrigger>
         <SelectContent>
            {data?.map(org => (
               <SelectItem key={org?.id} value={org?.slug}>
                  {org?.name}
               </SelectItem>
            ))}
            <CreateOrganization />
         </SelectContent>
      </Select>
   );
}
