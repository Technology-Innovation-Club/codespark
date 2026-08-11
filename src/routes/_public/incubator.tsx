import { createFileRoute } from "@tanstack/react-router";
import { Incubator } from "@/pages/Incubator";

export const Route = createFileRoute("/_public/incubator")({
  component: Incubator,
});