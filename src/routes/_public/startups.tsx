import { createFileRoute } from "@tanstack/react-router";
import { Startups } from "@/pages/Startups";

export const Route = createFileRoute("/_public/startups")({
  component: Startups,
});