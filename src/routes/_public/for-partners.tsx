import { createFileRoute } from "@tanstack/react-router";
import { Partners } from "@/pages/Partners";

export const Route = createFileRoute("/_public/for-partners")({
  component: Partners,
});