import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { useResources } from "@/lib/data";
import { NBCard, Sticker } from "@/components/nb";
import { ResourceGrid, ResourceGridSkeleton } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";

export const Route = createFileRoute("/challenge-resource-hub/_hub/certifications")({
  head: () => ({
    meta: [
      { title: "Certification hub — CodeSpark Innovation Hub" },
      {
        name: "description",
        content:
          "Every certificate-bearing course in one place, organised by beginner, intermediate and advanced.",
      },
      { property: "og:title", content: "Certification hub — CodeSpark Innovation Hub" },
      {
        property: "og:description",
        content: "Earn credentials you can put on your CV before the challenge ends.",
      },
    ],
  }),
  component: CertificationsPage,
});

const LEVELS = [
  { key: "beginner", tone: "green", blurb: "Start here — no prerequisites." },
  { key: "intermediate", tone: "yellow", blurb: "You've shipped something before." },
  { key: "advanced", tone: "pink", blurb: "Deep dives worth the time." },
] as const;

function CertificationsPage() {
  const { data: resources, isLoading } = useResources();
  const certs = (resources ?? []).filter((r) => r.has_certificate);

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Credentials that travel with you"
        title="Certification hub"
        subtitle="Free and audit-friendly programmes that end with something you can show."
      />

      <NBCard className="mb-10 flex items-center gap-4 bg-brand-green p-6">
        <Award className="h-10 w-10 shrink-0" />
        <p className="font-display text-lg font-extrabold">
          {certs.length} certificate-bearing programmes available right now.
        </p>
      </NBCard>

      {isLoading ? (
        <ResourceGridSkeleton />
      ) : (
        <div className="space-y-12">
          {LEVELS.map((level) => {
            const list = certs.filter((c) => c.difficulty === level.key);
            if (list.length === 0) return null;
            return (
              <section key={level.key}>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl capitalize">{level.key}</h2>
                  <Sticker tone={level.tone}>{list.length}</Sticker>
                  <p className="text-sm text-muted-foreground">{level.blurb}</p>
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
