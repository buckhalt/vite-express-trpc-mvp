import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { trpc } from '@/trpc';

import { CreateOrganization } from './CreateOrganization';
import { useNavigate, useParams } from '@tanstack/react-router';
import { useMemo } from 'react';

export function OrganizationSwitcher() {
   const { data } = trpc.organization.getAll.useQuery();
   const { organization } = useParams({ strict: false }); // need to use strict: false to denote that you want to access params from ambiguous location (outside route)
   const navigate = useNavigate();

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
