import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export default function RootRoute() {
  console.log("HI");

  return (
    <div>
      <h1>This is the Root Route</h1>

      <nav>
        <ul className="flex gap-2 border border-red-500">
          <li>
            <Link to={"/"} className="data-status:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="[&.active]:text-red-500">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
