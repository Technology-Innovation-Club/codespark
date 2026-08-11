import { useEffect } from "react";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/challenge-resource-hub/_hub")({
  component: HubLayout,
});

function HubLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: "/challenge-resource-hub/auth", replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}