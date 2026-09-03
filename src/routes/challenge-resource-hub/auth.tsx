import { useEffect, useRef, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Rocket, Mail, User, Lock, Users } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useCompleteProfile } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/auth")({
  component: OnboardingPage,
});

type Mode = "signIn" | "signUp";

function OnboardingPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn } = useAuthActions();
  const completeProfile = useCompleteProfile();

  const [mode, setMode] = useState<Mode>("signIn");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [busy, setBusy] = useState(false);

  const isAuthenticatedRef = useRef(isAuthenticated);
  useEffect(() => { isAuthenticatedRef.current = isAuthenticated; }, [isAuthenticated]);

  useEffect(() => {
    if (!isLoading && isAuthenticated) navigate({ to: "/challenge-resource-hub/dashboard", replace: true });
  }, [isLoading, isAuthenticated, navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signUp") {
        await signIn("password", { flow: "signUp", email, password, username, team });
        await waitFor(() => isAuthenticatedRef.current);
        await completeProfile.mutateAsync({ username, team, email });
        toast.success(`Welcome to the Hub, ${username} 🎉`);
      } else {
        await signIn("password", { flow: "signIn", email, password });
        await waitFor(() => isAuthenticatedRef.current);
        toast.success("Welcome back!");
      }
      navigate({ to: "/challenge-resource-hub/dashboard", replace: true });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/challenge-resource-hub" className="mb-6 flex items-center justify-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
          <span className="font-display text-lg font-semibold tracking-tight">CodeSpark Hub</span>
        </Link>

        <Card className="p-7">
          <div className="mb-5 flex justify-center">
            <Badge variant="soft">{mode === "signUp" ? "Join the challenge" : "Welcome back"}</Badge>
          </div>
          <h1 className="text-center font-display text-2xl font-semibold">{mode === "signUp" ? "Create your account" : "Sign in"}</h1>
          <p className="mt-2 text-center text-sm" style={{ color: "var(--muted)" }}>
            {mode === "signUp" ? "Pick a username and a password. That's it — you're in." : "Enter your email and password to pick up where you left off."}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-1 rounded-full border bg-[var(--surface-2)] p-1" style={{ borderColor: "var(--border)" }} role="tablist" aria-label="Sign in or sign up">
            <TabButton active={mode === "signIn"} onClick={() => setMode("signIn")}>Sign in</TabButton>
            <TabButton active={mode === "signUp"} onClick={() => setMode("signUp")}>Sign up</TabButton>
          </div>

          <form onSubmit={submit} className="mt-6 space-y-3">
            {mode === "signUp" && (
              <Field icon={<User className="h-4 w-4" />} value={username} onChange={setUsername} placeholder="Username" type="text" required autoComplete="username" />
            )}
            <Field icon={<Mail className="h-4 w-4" />} value={email} onChange={setEmail} placeholder="you@email.com" type="email" required autoComplete="email" />
            <Field icon={<Lock className="h-4 w-4" />} value={password} onChange={setPassword} placeholder="Password" type="password" required autoComplete={mode === "signUp" ? "new-password" : "current-password"} />
            {mode === "signUp" && (
              <Field icon={<Users className="h-4 w-4" />} value={team} onChange={(v) => setTeam(v.replace(/\b[a-z]/g, (c) => c.toUpperCase()))} placeholder="Team name" type="text" required autoComplete="organization" />
            )}
            <Button type="submit" className="h-12 w-full rounded-full" disabled={busy}>
              {busy ? (mode === "signUp" ? "Creating your account…" : "Signing you in…") : mode === "signUp" ? "Create account" : "Sign in"}
            </Button>
          </form>
        </Card>

        <p className="mt-6 text-center text-xs" style={{ color: "var(--muted)" }}>By continuing you agree to the challenge terms.</p>
      </div>
    </main>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button" role="tab" aria-selected={active} onClick={onClick}
      className={cn("rounded-full py-2 text-sm font-medium transition-colors", active ? "bg-[var(--accent)] text-white shadow-sm" : "text-[var(--muted)] hover:text-[var(--ink)]")}
    >
      {children}
    </button>
  );
}

function waitFor(cond: () => boolean, timeoutMs = 10000) {
  return new Promise<void>((resolve, reject) => {
    const started = Date.now();
    const timer = setInterval(() => {
      if (cond()) { clearInterval(timer); resolve(); }
      else if (Date.now() - started > timeoutMs) { clearInterval(timer); reject(new Error("Timed out waiting for session")); }
    }, 120);
  });
}

function Field({ icon, value, onChange, placeholder, type, required, autoComplete }: { icon: React.ReactNode; value: string; onChange: (v: string) => void; placeholder: string; type: string; required?: boolean; autoComplete?: string }) {
  return (
    <label className="flex h-12 items-center gap-2 rounded-full border bg-[var(--surface)] px-4 focus-within:border-[var(--accent)] focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_14%,transparent)]" style={{ borderColor: "var(--border)" }}>
      <span style={{ color: "var(--muted)" }}>{icon}</span>
      <input className="h-full w-full bg-transparent text-[15px] outline-none placeholder:text-[var(--muted-2)]" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type} required={required} autoComplete={autoComplete} aria-label={placeholder} />
    </label>
  );
}
