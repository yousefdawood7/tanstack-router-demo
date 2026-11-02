import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings_/passwords')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings_/passwords"!</div>
}
