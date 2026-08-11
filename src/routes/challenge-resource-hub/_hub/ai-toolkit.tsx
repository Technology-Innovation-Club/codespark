import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, ExternalLink, Copy } from "lucide-react";
import { toast } from "sonner";
import { useResources } from "@/lib/data";
import { NBButton, NBCard, Sticker, NBSkeleton } from "@/components/nb";
import { PageHeader } from "@/components/AppShell";

export const Route = createFileRoute("/challenge-resource-hub/_hub/ai-toolkit")({
  head: () => ({
    meta: [
      { title: "AI toolkit — CodeSpark Innovation Hub" },
      {
        name: "description",
        content:
          "The AI tools worth learning — ChatGPT, Claude, Gemini, Cursor, Lovable and more — with use cases and prompt templates.",
      },
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
    <div className="animate-rise">
      <PageHeader
        eyebrow="Leverage, not shortcuts"
        title="AI toolkit"
        subtitle="Learn the tools properly: what each one is actually good at, plus prompts you can reuse today."
      />

      <NBCard className="mb-10 flex items-start gap-4 bg-brand-purple p-6 text-paper">
        <Sparkles className="mt-1 h-8 w-8 shrink-0" />
        <div>
          <h2 className="text-2xl text-paper">Prompt like a builder</h2>
          <p className="mt-1 text-sm text-paper/85">
            Give context, state the goal, name constraints, ask for options, then iterate. Every card
            below has a template you can copy and adapt.
          </p>
        </div>
      </NBCard>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <NBSkeleton key={i} className="h-64" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <NBCard key={tool.id} hover className="flex h-full flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl leading-tight">{tool.title}</h3>
                <Sticker tone="teal">{tool.difficulty}</Sticker>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>

              {tool.use_cases && (
                <div className="mt-4">
                  <p className="font-display text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
                    Best for
                  </p>
                  <p className="mt-1 text-sm">{tool.use_cases}</p>
                </div>
              )}

              {tool.prompt_template && (
                <div className="mt-4 rounded-xl border-[3px] border-ink bg-cream p-3">
                  <p className="font-display text-xs font-extrabold uppercase tracking-wide">
                    Prompt template
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-xs leading-relaxed">
                    {tool.prompt_template}
                  </p>
                  <NBButton
                    tone="paper"
                    size="sm"
                    className="mt-3"
                    onClick={() => {
                      navigator.clipboard.writeText(tool.prompt_template ?? "");
                      toast.success("Prompt copied");
                    }}
                  >
                    <Copy className="h-4 w-4" /> Copy
                  </NBButton>
                </div>
              )}

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-4"
              >
                <NBButton tone="purple" size="sm" className="w-full">
                  Open tool <ExternalLink className="h-4 w-4" />
                </NBButton>
              </a>
            </NBCard>
          ))}
        </div>
      )}
    </div>
  );
}
