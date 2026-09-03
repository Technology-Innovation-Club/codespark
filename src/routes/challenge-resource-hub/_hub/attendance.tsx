import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { CalendarCheck, ClipboardCopy, ShieldCheck, Users } from "lucide-react";
import { useAdminAttendance, useCreateAttendanceSession, useMarkAttendance, useMyAttendance, useProfile } from "@/lib/data";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/challenge-resource-hub/_hub/attendance")({
  head: () => ({
    meta: [
      { title: "Attendance — CodeSpark Innovation Hub" },
      { name: "description", content: "Mark yourself present with the session code and track your attendance history." },
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
    <div>
      <PageHeader
        eyebrow="Weekly sessions"
        title="Attendance"
        subtitle={profile?.is_admin ? "Admins can open a session code and see who showed up." : "Enter the code your facilitator shared to mark yourself present."}
      />

      {profileLoading ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <Skeleton className="h-72 rounded-[20px]" /><Skeleton className="h-72 rounded-[20px] lg:col-span-2" />
        </div>
      ) : profile?.is_admin ? (
        <AdminPanel />
      ) : (
        <RedeemPanel />
      )}

      <div className="mt-10">
        <h2 className="mb-4 font-display text-xl font-semibold">Your attendance history</h2>
        {myAttendance.isLoading ? (
          <Skeleton className="h-40 rounded-[20px]" />
        ) : (myAttendance.data ?? []).length === 0 ? (
          <Card className="p-6 text-sm" style={{ color: "var(--muted)" }}>No sessions attended yet. Grab a code at your next session!</Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(myAttendance.data ?? []).map((r) => (
              <Card key={r.id} className="p-5">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"><CalendarCheck className="h-4 w-4" /></span>
                  <Badge variant="secondary">
                    {new Date(r.attended_at).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
                  </Badge>
                </div>
                <p className="mt-3 font-display text-lg font-semibold">Present · {new Date(r.attended_at).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}</p>
                <p className="mt-1 text-xs font-medium" style={{ color: "var(--muted)" }}>{r.duration_minutes}-minute session</p>
              </Card>
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
          if (res.status === "already") toast.info("You're already marked present for this session");
          else toast.success("Attendance marked — see you at the next one!");
          setCode("");
        },
        onError: (err) => toast.error(err instanceof Error ? err.message : "Something went wrong"),
      },
    );
  }

  return (
    <Card className="max-w-xl p-7">
      <h2 className="font-display text-xl font-semibold">Ready to mark attendance?</h2>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Ask the facilitator for today's code and drop it in below. Codes expire after a few minutes.</p>
      <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Input value={code} onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 6))} placeholder="e.g. KX7Q2M" aria-label="Attendance code" className="h-12 flex-1 rounded-full font-display text-lg font-semibold uppercase tracking-[0.3em]" />
        <Button type="submit" disabled={mark.isPending || !code.trim()} className="h-12 rounded-full px-8">Mark present</Button>
      </form>
    </Card>
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
    create.mutate({ durationMinutes: duration }, { onSuccess: () => toast.success("Session opened — share the code!"), onError: (e) => toast.error((e as Error).message) });
  }

  const remaining = admin?.session && !admin.session.expired ? Math.max(0, Math.ceil((admin.session.expires_at - now) / 1000)) : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="p-7 lg:col-span-2" style={{ background: "var(--accent-soft)", borderColor: "color-mix(in srgb, var(--accent) 14%, transparent)" }}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Badge variant="default" className="mb-3"><ShieldCheck className="h-3.5 w-3.5" /> Admin controls</Badge>
            <h2 className="font-display text-xl font-semibold">Open a session code</h2>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>Share the code live with the team. Everyone who enters it before it expires is marked present.</p>
          </div>
        </div>

        {admin?.session && !admin.session.expired ? (
          <div className="mt-6 rounded-[20px] border bg-[var(--surface)] p-6" style={{ borderColor: "var(--border)" }}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--muted)" }}>Live code</p>
                <p className="font-display text-4xl font-semibold tracking-[0.15em]">{admin.session.code}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--muted)" }}>Expires in</p>
                <p className="font-display text-3xl font-semibold tabular-nums">{remaining}s</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(admin.session.code); toast.success("Code copied"); }}><ClipboardCopy className="h-4 w-4" /> Copy code</Button>
              <span className="inline-flex items-center gap-1 text-sm font-semibold"><Users className="h-4 w-4" />{admin.attendees.length} present</span>
            </div>
            {admin.attendees.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {admin.attendees.map((a) => (
                  <span key={a.user_id} className="rounded-full border bg-[var(--surface-2)] px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--border)" }}>{a.name}</span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 rounded-[20px] border bg-[var(--surface)] p-6" style={{ borderColor: "var(--border)" }}>
            {create.isPending ? (
              <div className="flex items-center gap-3 py-4"><span className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--accent)] border-t-transparent" /><span className="text-sm font-semibold">Opening session…</span></div>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--muted)" }}>Session duration</p>
                <div className="mt-3 flex gap-2">
                  {DURATIONS.map((d) => (
                    <Button key={d.value} variant={duration === d.value ? "default" : "outline"} size="sm" onClick={() => setDuration(d.value)}>{d.label}</Button>
                  ))}
                </div>
                <div className="mt-6"><Button onClick={createSession}>Create an attendance</Button></div>
              </>
            )}
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h2 className="font-display text-lg font-semibold">Session rundown</h2>
        <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>The most recent session you opened and who entered its code.</p>
        {admin?.session ? (
          <div className="mt-5 space-y-3">
            <div className="rounded-[16px] border bg-[var(--surface-2)] p-4" style={{ borderColor: "var(--border)" }}>
              <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>Code</p>
              <p className="font-display text-xl font-semibold tracking-[0.15em]">{admin.session.code}</p>
            </div>
            <div className="rounded-[16px] border bg-[var(--surface-2)] p-4" style={{ borderColor: "var(--border)" }}>
              <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>{admin.session.expired ? "Closed" : "Live"} · {admin.session.duration_minutes} min</p>
              <p className="font-display text-base font-semibold">{admin.attendees.length} attendee{admin.attendees.length === 1 ? "" : "s"}</p>
            </div>
            {admin.session.expired && (
              <Button className="w-full" onClick={createSession}>Open a new session</Button>
            )}
          </div>
        ) : (
          <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>No sessions opened yet.</p>
        )}
      </Card>
    </div>
  );
}
