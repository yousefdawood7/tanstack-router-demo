import { createFileRoute } from "@tanstack/react-router";
import SettingButton from "./-components/settings-button";

export const Route = createFileRoute("/_settings/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SettingButton />;
}
