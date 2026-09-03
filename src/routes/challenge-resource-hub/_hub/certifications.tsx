import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { useResources } from "@/lib/data";
import { ResourceGrid, ResourceGridSkeleton } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/challenge-resource-hub/_hub/certifications")({
  head: () => ({
    meta: [
      { title: "Certification hub — CodeSpark Innovation Hub" },
      { name: "description", content: "Every certificate-bearing course in one place, organised by beginner, intermediate and advanced." },
      { property: "og:title", content: "Certification hub — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Earn credentials you can put on your CV before the challenge ends." },
    ],
  }),
  component: CertificationsPage,
});

const LEVELS = [
  { key: "beginner", blurb: "Start here — no prerequisites." },
  { key: "intermediate", blurb: "You've shipped something before." },
  { key: "advanced", blurb: "Deep dives worth the time." },
] as const;

function CertificationsPage() {
  const { data: resources, isLoading } = useResources();
  const certs = (resources ?? []).filter((r) => r.has_certificate);

  return (
    <div>
      <PageHeader eyebrow="Credentials that travel with you" title="Certification hub" subtitle="Free and audit-friendly programmes that end with something you can show." />

      <Card className="mb-10 flex items-center gap-4 p-5" style={{ background: "var(--accent-soft)", borderColor: "color-mix(in srgb, var(--accent) 14%, transparent)" }}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-white"><Award className="h-5 w-5" /></span>
        <p className="font-display text-base font-semibold" style={{ color: "var(--accent-ink)" }}>{certs.length} certificate-bearing programmes available right now.</p>
      </Card>

      {isLoading ? (
        <ResourceGridSkeleton />
      ) : (
        <div className="space-y-10">
          {LEVELS.map((level) => {
            const list = certs.filter((c) => c.difficulty === level.key);
            if (list.length === 0) return null;
            return (
              <section key={level.key}>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-xl font-semibold capitalize">{level.key}</h2>
                  <Badge variant="soft">{list.length}</Badge>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{level.blurb}</p>
                </div>
                <ResourceGrid resources={list} />
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
