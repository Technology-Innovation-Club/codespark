import { createFileRoute } from "@tanstack/react-router";
import { InnovationChallenge } from "@/pages/InnovationChallenge";

export const Route = createFileRoute("/_public/innovation-challenge")({
  component: InnovationChallenge,
});