import { Link } from '@tanstack/react-router';
import { OrganizationSwitcher } from './OrganizationSwitcher';
import { Slash, Palette } from 'lucide-react';
import { useParams } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
   // @ts-ignore
   const { project } = useParams({ strict: false });

   return (
      <div className="flex flex-row items-center justify-between p-4 border-b bg-transparent">
         <div className="flex flex-row items-center space-x-2">
            <Link to="/">
               <div className="bg-indigo-500 rounded-lg p-2">
                  <Palette size={20} className="text-white" />
               </div>
            </Link>
            <Slash size={18} className="text-slate-200" />
            <OrganizationSwitcher />
            {project && (
               <>
                  <Slash size={18} className="text-slate-200" />
                  <Badge variant="secondary">{project}</Badge>
               </>
            )}
         </div>
      </div>
   );
};
