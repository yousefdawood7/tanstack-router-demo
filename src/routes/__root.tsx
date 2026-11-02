import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/settings", label: "Settings" },
  { to: "/settings/profile", label: "Profile" },
  { to: "/settings/payment", label: "Payment" },
  { to: "/settings/passwords", label: "Passwords" },
] as const;

function RootComponent() {
  return (
    <React.Fragment>
      <nav className="flex flex-wrap gap-2 border-b border-neutral-800 p-4">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            activeProps={{ className: "bg-neutral-800 text-white" }}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
