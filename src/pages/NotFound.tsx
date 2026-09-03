import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-[var(--bg)] px-5 py-16 sm:py-24">
      {/* soft blue + surface-2 decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-80px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] opacity-80 blur-[32px]" />
        <div className="absolute -left-16 bottom-10 hidden h-64 w-64 rounded-full bg-[var(--surface-2)] opacity-70 blur-[28px] sm:block" />
        <div className="absolute -right-16 top-24 hidden h-72 w-72 rounded-full bg-[var(--surface-2)] opacity-60 blur-[36px] sm:block" />
        <div className="absolute left-1/2 top-1/2 hidden h-[480px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] border border-[var(--border)] opacity-40 sm:block" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <Card className="px-6 py-10 sm:px-10 sm:py-14">
          <p className="inline-flex items-center gap-2 rounded-full border bg-[var(--surface-2)] px-4 py-2 text-[11px] font-medium tracking-[0.14em] uppercase" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            404 • Route not found
          </p>

          <h1 className="mt-8 font-display text-[40px] sm:text-[56px] font-semibold leading-[0.95] tracking-tight text-[var(--ink)]">
            Page not found.
          </h1>

          <p className="mt-3 font-display text-xl sm:text-2xl font-medium tracking-tight" style={{ color: "var(--muted)" }}>
            This route does not exist.
          </p>

          <p className="mt-5 mx-auto max-w-xl text-sm sm:text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            The page you requested is not mapped in this build. Navigate home to continue exploring CodeSpark.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/for-partners">Sponsor CodeSpark</Link>
            </Button>
          </div>
        </Card>

        <p className="mt-6 text-xs" style={{ color: "var(--muted-2)" }}>
          If you followed a link, let us know at hello@codespark.ng
        </p>
      </div>
    </section>
  );
}
