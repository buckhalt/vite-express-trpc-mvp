# Studio MVP

Based on a react-vite-trpc [template](https://github.com/kuubson/react-vite-trpc)

| [Stack](#-stack) | [Quick start](#-quick-start) | [Challenge](#-the-challenge) | [Scripts](#-scripts) | [Env](#-envs) | [Ports](#-ports) | [License](#-license) |
| ---------------- | ---------------------------- | ---------------------------- | -------------------- | ------------- | ---------------- | -------------------- |

## 🔧 Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![tRPC](https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=Turborepo&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle-C5F74E.svg?style=for-the-badge&logo=Drizzle&logoColor=black)
![Turso](https://img.shields.io/badge/Turso-162C32.svg?style=for-the-badge&logo=Turso&logoColor=%4FF7D1)

## 🚀 Quick start

It is possible to deploy the full app, or to separately deploy the frontend and backend. 

- Frontend via Vercel: [https://vite-express-trpc-mvp-web.vercel.app/](https://vite-express-trpc-mvp-web.vercel.app/)
- Backend via Render: [https://studio-server-a2l0.onrender.com/trpc/hello.world](https://studio-server-a2l0.onrender.com/trpc/hello.world)

For local execution, use `pnpm install` and `turbo dev`.

## ⌨ Scripts

| Command            | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `pnpm start`       | Runs the production build of the server (`/server`)                                             |
| `pnpm dev`         | Launches apps and bundles all packages in watch mode                                            |
| `pnpm lint`        | Performs an eslint check through all workspaces                                                 |
| `pnpm lint:fix`    | Performs an eslint fix through all workspaces                                                   |
| `pnpm ts:check`    | Performs a TypeScript check through all workspaces                                              |
| `pnpm ts:references` | Syncs TypeScript references in all `tsconfig.json` files + updates `nodemon.json` `watch` array |
| `pnpm stylelint`   | Performs an stylelint check through all workspaces                                              |
| `pnpm check`       | Performs eslint, TypeScript, and stylelint checks through all workspaces                        |
| `pnpm build`       | Builds all apps                                                                                 |
| `pnpm build:lib`   | Bundles all packages                                                                            |
| `pnpm postinstall` | Ensures that local or CI environment is ready after installing packages                         |
| `turbo dev `       | Runs server and web in dev                                                                      |
| `turbo build `     | Builds all packages and apps                                                                    |

## 🔒 Envs

Envs are validated with the package `envalid`. Check out `.env-example` & `.env.test-example` files

If the `pnpm dev` script is executed without the required environment variables, the application will output similar details in the console:

```js
================================
Missing environment variables:
PORT: Port the Express server is running on (eg. "3001"). See https://expressjs.com/en/starter/hello-world.html
================================


## 🌐 Ports for Local Dev

-  🌐 :3000 - Web
-  🖥️ :3001 - Server
