import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/event")({
  beforeLoad: () => {
    throw redirect({ to: "/events", replace: true });
  },
});