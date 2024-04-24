import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
   component: Index,
});

function Index() {
   return (
      <div className="flex items-center justify-center p-48">
         <div className="text-center">
            <h1 className="text-4xl font-bold pb-6">Studio MVP</h1>
            <div className="flex sm:flex-row flex-col">
               <img
                  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="TypeScript"
               />
               <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  alt="React"
               />
               <img
                  src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white"
                  alt="Vite"
               />
               <img
                  src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                  alt="Express"
               />
               <img
                  src="https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white"
                  alt="tRPC"
               />

               <img
                  src="https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=Turborepo&logoColor=white"
                  alt="Turborepo"
               />

               <img
                  src="https://img.shields.io/badge/Drizzle-C5F74E.svg?style=for-the-badge&logo=Drizzle&logoColor=black"
                  alt="Drizzle"
               />

               <img
                  src="https://img.shields.io/badge/Turso-162C32.svg?style=for-the-badge&logo=Turso&logoColor=%4FF7D1"
                  alt="Turso"
               />
            </div>
         </div>
      </div>
   );
}
