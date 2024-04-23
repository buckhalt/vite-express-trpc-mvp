import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col p-12">
      <h1 className="text-3xl font-medium pb-2">Studio MVP</h1>
      <h2 className="text-2xl pb-2">Select an organization to view a dashboard.</h2>
    </div>
  )
}