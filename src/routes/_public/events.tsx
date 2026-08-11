import { createFileRoute } from "@tanstack/react-router";
import { Event } from "@/pages/Event";

export const Route = createFileRoute("/_public/events")({
  component: Event,
});