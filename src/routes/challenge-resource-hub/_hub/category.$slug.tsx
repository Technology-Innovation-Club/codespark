import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useCategories, useResources } from "@/lib/data";
import { NBButton, Sticker } from "@/components/nb";
import { ResourceGrid, ResourceGridSkeleton } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";

export const Route = createFileRoute("/challenge-resource-hub/_hub/category/$slug")({
  head: ({ params }) => {
    const name = params.slug.replace(/-/g, " ");
    const title = `${name} resources — CodeSpark Innovation Hub`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `Curated official ${name} learning resources for CodeSpark participants.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: `Curated official ${name} learning resources for CodeSpark participants.`,
        },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <h1 className="text-3xl">Category not found</h1>
      <Link to="/challenge-resource-hub/resources" className="mt-6 inline-block">
        <NBButton tone="yellow">Back to library</NBButton>
      </Link>
    </div>
  ),
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const { data: categories, isLoading: loadingCats } = useCategories();
  const { data: resources, isLoading } = useResources();

  const category = categories?.find((c) => c.slug === slug);
  if (!loadingCats && categories && !category) throw notFound();

  const list = (resources ?? []).filter((r) => r.category_id === category?.id);

  return (
    <div className="animate-rise">
      <Link to="/challenge-resource-hub/resources" className="mb-4 inline-block">
        <NBButton tone="paper" size="sm">
          <ArrowLeft className="h-4 w-4" /> All categories
        </NBButton>
      </Link>

      <PageHeader
        eyebrow="Category"
        title={category?.name ?? "Loading…"}
        subtitle={category?.description ?? undefined}
        right={<Sticker tone={category?.color}>{list.length} resources</Sticker>}
      />

      {isLoading ? <ResourceGridSkeleton /> : <ResourceGrid resources={list} />}
    </div>
  );
}
