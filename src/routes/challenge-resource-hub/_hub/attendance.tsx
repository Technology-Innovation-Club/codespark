import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { CalendarCheck, ClipboardCopy, ShieldCheck, Users } from "lucide-react";
import {
  useAdminAttendance,
  useCreateAttendanceSession,
  useMarkAttendance,
  useMyAttendance,
  useProfile,
} from "@/lib/data";
import { NBButton, NBCard, NBSkeleton, Sticker } from "@/components/nb";
import { PageHeader } from "@/components/AppShell";

export const Route = createFileRoute("/challenge-resource-hub/_hub/attendance")({
  head: () => ({
    meta: [
      { title: "Attendance — CodeSpark Innovation Hub" },
      {
        name: "description",
        content: "Mark yourself present with the session code and track your attendance history.",
      },
      { property: "og:title", content: "Attendance — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Track your weekly session attendance." },
    ],
  }),
  component: AttendancePage,
});

const DURATIONS = [
  { label: "5 min", value: 5 },
  { label: "10 min", value: 10 },
  { label: "15 min", value: 15 },
];

function AttendancePage() {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const myAttendance = useMyAttendance();

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Weekly sessions"
        title="Attendance"
        subtitle={
          profile?.is_admin
            ? "Admins can open a session code and see who showed up."
            : "Enter the code your facilitator shared to mark yourself present."
        }
      />

      {profileLoading ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <NBSkeleton className="h-72" />
          <NBSkeleton className="h-72 lg:col-span-2" />
        </div>
      ) : profile?.is_admin ? (
        <AdminPanel />
      ) : (
        <RedeemPanel />
      )}

      <div className="mt-10">
        <h2 className="mb-4 text-2xl">Your attendance history</h2>
        {myAttendance.isLoading ? (
          <NBSkeleton className="h-40" />
        ) : (myAttendance.data ?? []).length === 0 ? (
          <NBCard className="p-6 text-muted-foreground">
            No sessions attended yet. Grab a code at your next session!
          </NBCard>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(myAttendance.data ?? []).map((r) => (
              <NBCard key={r.id} className="p-5">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border-[3px] border-ink bg-brand-teal shadow-brutal-sm">
                    <CalendarCheck className="h-4 w-4" />
                  </span>
                  <Sticker tone="paper" className="bg-cream">
                    {new Date(r.attended_at).toLocaleDateString(undefined, {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </Sticker>
                </div>
                <p className="mt-3 font-display text-lg font-extrabold">
                  Present · {new Date(r.attended_at).toLocaleTimeString(undefined, {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  {r.duration_minutes}-minute session
                </p>
              </NBCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RedeemPanel() {
  const [code, setCode] = useState("");
  const mark = useMarkAttendance();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    mark.mutate(
      { code },
      {
        onSuccess: (res) => {
          if (res.status === "already") {
            toast.info("You're already marked present for this session");
          } else {
            toast.success("Attendance marked — see you at the next one!");
          }
          setCode("");
        },
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Something went wrong"),
      },
    );
  }

  return (
    <NBCard className="max-w-xl p-7">
      <h2 className="text-2xl">Ready to mark attendance?</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Ask the facilitator for today's code and drop it in below. Codes expire after a few
        minutes.
      </p>
      <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 6))}
          placeholder="e.g. KX7Q2M"
          aria-label="Attendance code"
          className="h-12 flex-1 rounded-xl border-[3px] border-ink bg-cream px-4 font-display text-lg font-extrabold uppercase tracking-[0.3em] outline-none focus:outline focus:outline-[3px] focus:outline-brand-blue"
        />
        <NBButton type="submit" tone="orange" size="lg" disabled={mark.isPending || !code.trim()}>
          Mark present
        </NBButton>
      </form>
    </NBCard>
  );
}

function AdminPanel() {
  const [now, setNow] = useState(() => Date.now());
  const [duration, setDuration] = useState(5);
  const create = useCreateAttendanceSession();
  const { data: admin } = useAdminAttendance(now);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  function createSession() {
    create.mutate(
      { durationMinutes: duration },
      { onSuccess: () => toast.success("Session opened — share the code!"), onError: (e) => toast.error((e as Error).message) },
    );
  }

  const remaining = admin?.session && !admin.session.expired
    ? Math.max(0, Math.ceil((admin.session.expires_at - now) / 1000))
    : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <NBCard className="bg-brand-yellow p-7 lg:col-span-2">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Sticker tone="ink" className="mb-3 bg-ink text-paper">
              <ShieldCheck className="h-3.5 w-3.5" /> Admin controls
            </Sticker>
            <h2 className="text-2xl">Open a session code</h2>
            <p className="mt-1 text-sm text-ink/70">
              Share the code live with the team. Everyone who enters it before it expires is
              marked present.
            </p>
          </div>
        </div>

        {admin?.session && !admin.session.expired ? (
          <div className="mt-6 rounded-2xl border-[3px] border-ink bg-paper p-6 shadow-brutal-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Live code
                </p>
                <p className="font-display text-5xl font-extrabold tracking-[0.15em]">
                  {admin.session.code}
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Expires in
                </p>
                <p className="font-display text-4xl font-extrabold tabular-nums">{remaining}s</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <NBButton
                tone="ink"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(admin.session.code);
                  toast.success("Code copied");
                }}
              >
                <ClipboardCopy className="h-4 w-4" /> Copy code
              </NBButton>
              <span className="font-display font-extrabold">
                <Users className="mr-1 inline h-4 w-4" />
                {admin.attendees.length} present
              </span>
            </div>

            {admin.attendees.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {admin.attendees.map((a) => (
                  <span
                    key={a.user_id}
                    className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-semibold"
                  >
                    {a.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border-[3px] border-ink bg-paper p-6 shadow-brutal-sm">
            {create.isPending ? (
              <div className="flex items-center gap-3 py-4">
                <span className="h-5 w-5 animate-spin rounded-full border-[3px] border-ink border-t-transparent" />
                <span className="font-display font-extrabold">Opening session…</span>
              </div>
            ) : (
              <>
                <p className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Session duration
                </p>
                <div className="mt-3 flex gap-2">
                  {DURATIONS.map((d) => (
                    <NBButton
                      key={d.value}
                      tone={duration === d.value ? "orange" : "paper"}
                      size="sm"
                      onClick={() => setDuration(d.value)}
                    >
                      {d.label}
                    </NBButton>
                  ))}
                </div>
                <div className="mt-6">
                  <NBButton tone="orange" size="lg" onClick={createSession}>
                    Create an attendance
                  </NBButton>
                </div>
              </>
            )}
          </div>
        )}
      </NBCard>

      <NBCard className="p-6">
        <h2 className="text-xl">Session rundown</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The most recent session you opened and who entered its code.
        </p>
        {admin?.session ? (
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border-[3px] border-ink bg-cream p-4">
              <p className="text-xs font-semibold text-muted-foreground">Code</p>
              <p className="font-display text-2xl font-extrabold tracking-[0.15em]">
                {admin.session.code}
              </p>
            </div>
            <div className="rounded-xl border-[3px] border-ink bg-cream p-4">
              <p className="text-xs font-semibold text-muted-foreground">
                {admin.session.expired ? "Closed" : "Live"} · {admin.session.duration_minutes} min
              </p>
              <p className="font-display text-lg font-extrabold">
                {admin.attendees.length} attendee{admin.attendees.length === 1 ? "" : "s"}
              </p>
            </div>
            {admin.session.expired && (
              <NBButton tone="orange" size="md" className="w-full" onClick={createSession}>
                Open a new session
              </NBButton>
            )}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">No sessions opened yet.</p>
        )}
      </NBCard>
    </div>
  );
}