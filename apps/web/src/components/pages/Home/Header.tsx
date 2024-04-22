import { Button } from '@/components/ui/button'

import { OrganizationSwitcher } from './OrganizationSwitcher'

export const Header = () => {
   return (
      <div className="flex flex-row items-center justify-between bg-slate-200 p-2">
         <div className="flex flex-row items-center space-x-2">
            <div className="flex flex-col">
               <h4>Studio MVP</h4>
               <h4>Vite + Express + tRPC + Drizzle + Turso</h4>
            </div>
         </div>
         <div className="p-2 flex flex-row space-x-2">
            <OrganizationSwitcher />
            <Button variant="outline">Login/Logout</Button>
         </div>
      </div>
   )
}
