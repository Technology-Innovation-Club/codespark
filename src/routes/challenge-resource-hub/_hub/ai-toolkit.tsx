import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, ExternalLink, Copy } from "lucide-react";
import { toast } from "sonner";
import { useResources } from "@/lib/data";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/challenge-resource-hub/_hub/ai-toolkit")({
  head: () => ({
    meta: [
      { title: "AI toolkit — CodeSpark Innovation Hub" },
      { name: "description", content: "The AI tools worth learning — ChatGPT, Claude, Gemini, Cursor, Lovable and more — with use cases and prompt templates." },
      { property: "og:title", content: "AI toolkit — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Prompt templates and workflows for builder-grade AI use." },
    ],
  }),
  component: AiToolkitPage,
});

function AiToolkitPage() {
  const { data: resources, isLoading } = useResources();
  const tools = (resources ?? []).filter((r) => r.resource_type === "ai_tool");

  return (
    <div>
      <PageHeader eyebrow="Leverage, not shortcuts" title="AI toolkit" subtitle="Learn the tools properly: what each one is actually good at, plus prompts you can reuse today." />

      <Card className="mb-8 flex items-start gap-4 p-6 text-white" style={{ background: "var(--accent)", borderColor: "var(--accent)" }}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15"><Sparkles className="h-5 w-5" /></span>
        <div>
          <h2 className="font-display text-lg font-semibold">Prompt like a builder</h2>
          <p className="mt-1 text-sm opacity-80">Give context, state the goal, name constraints, ask for options, then iterate. Every card below has a template you can copy and adapt.</p>
        </div>
      </Card>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-[20px]" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.id} hover className="flex h-full flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold leading-tight">{tool.title}</h3>
                <Badge variant="soft">{tool.difficulty}</Badge>
              </div>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{tool.description}</p>

              {tool.use_cases && (
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>Best for</p>
                  <p className="mt-1 text-sm">{tool.use_cases}</p>
                </div>
              )}

              {tool.prompt_template && (
                <div className="mt-4 rounded-[16px] border bg-[var(--surface-2)] p-3" style={{ borderColor: "var(--border)" }}>
                  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>Prompt template</p>
                  <p className="mt-1 whitespace-pre-wrap text-xs leading-relaxed">{tool.prompt_template}</p>
                  <Button variant="outline" size="sm" className="mt-3" onClick={() => { navigator.clipboard.writeText(tool.prompt_template ?? ""); toast.success("Prompt copied"); }}>
                    <Copy className="h-4 w-4" /> Copy
                  </Button>
                </div>
              )}

              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4">
                <Button className="w-full">Open tool <ExternalLink className="h-4 w-4" /></Button>
              </a>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
