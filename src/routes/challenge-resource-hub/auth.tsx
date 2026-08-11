import { useEffect, useRef, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Rocket, Mail, User, Lock, Users } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { NBButton, FloatingShapes, Sticker } from "@/components/nb";
import { useCompleteProfile } from "@/lib/data";
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
  useEffect(() => {
    isAuthenticatedRef.current = isAuthenticated;
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isLoading && isAuthenticated)
      navigate({ to: "/challenge-resource-hub/dashboard", replace: true });
  }, [isLoading, isAuthenticated, navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signUp") {
        await signIn("password", {
          flow: "signUp",
          email,
          password,
          username,
          team,
        });
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
    <main className="hub-root relative grid min-h-screen place-items-center overflow-hidden bg-sky px-4 py-12">
      <div className="dotted-paper absolute inset-0" aria-hidden />
      <FloatingShapes />

      <div className="relative w-full max-w-md">
        <Link to="/challenge-resource-hub" className="mb-6 flex items-center justify-center gap-2">
          <span className="grid h-11 w-11 place-items-center rounded-xl border-[3px] border-ink bg-brand-orange shadow-brutal">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-extrabold">CodeSpark Hub</span>
        </Link>

        <div className="nb-surface animate-rise p-7 shadow-brutal-lg">
          <div className="mb-5 flex justify-center">
            <Sticker tone="yellow">{mode === "signUp" ? "Join the challenge" : "Welcome back"}</Sticker>
          </div>
          <h1 className="text-center font-display text-3xl">
            {mode === "signUp" ? "Create your account" : "Sign in"}
          </h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {mode === "signUp"
              ? "Pick a username and a password. That's it — you're in."
              : "Enter your email and password to pick up where you left off."}
          </p>

          <div
            className="mt-6 grid grid-cols-2 gap-1 rounded-xl border-[3px] border-ink bg-cream p-1"
            role="tablist"
            aria-label="Sign in or sign up"
          >
            <TabButton active={mode === "signIn"} onClick={() => setMode("signIn")}>
              Sign in
            </TabButton>
            <TabButton active={mode === "signUp"} onClick={() => setMode("signUp")}>
              Sign up
            </TabButton>
          </div>

          <form onSubmit={submit} className="mt-4 space-y-3">
            {mode === "signUp" && (
              <Field
                icon={<User className="h-4 w-4" />}
                value={username}
                onChange={setUsername}
                placeholder="Username"
                type="text"
                required
                autoComplete="username"
              />
            )}
            <Field
              icon={<Mail className="h-4 w-4" />}
              value={email}
              onChange={setEmail}
              placeholder="you@email.com"
              type="email"
              required
              autoComplete="email"
            />
            <Field
              icon={<Lock className="h-4 w-4" />}
              value={password}
              onChange={setPassword}
              placeholder="Password"
              type="password"
              required
              autoComplete={mode === "signUp" ? "new-password" : "current-password"}
            />
            {mode === "signUp" && (
              <Field
                icon={<Users className="h-4 w-4" />}
                value={team}
                onChange={setTeam}
                placeholder="Team name (optional)"
                type="text"
                autoComplete="organization"
              />
            )}
            <NBButton type="submit" tone="orange" size="lg" className="w-full" disabled={busy}>
              {busy
                ? mode === "signUp"
                  ? "Creating your account…"
                  : "Signing you in…"
                : mode === "signUp"
                  ? "Create account"
                  : "Sign in"}
            </NBButton>
          </form>
        </div>
      </div>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "nb-press rounded-lg border-[3px] border-transparent py-2 font-display text-sm font-extrabold",
        active ? "border-ink bg-brand-yellow shadow-brutal-sm" : "text-muted-foreground hover:bg-paper",
      )}
    >
      {children}
    </button>
  );
}

function waitFor(cond: () => boolean, timeoutMs = 10000) {
  return new Promise<void>((resolve, reject) => {
    const started = Date.now();
    const timer = setInterval(() => {
      if (cond()) {
        clearInterval(timer);
        resolve();
      } else if (Date.now() - started > timeoutMs) {
        clearInterval(timer);
        reject(new Error("Timed out waiting for session"));
      }
    }, 120);
  });
}

function Field({
  icon,
  value,
  onChange,
  placeholder,
  type,
  required,
  autoComplete,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="flex h-12 items-center gap-2 rounded-xl border-[3px] border-ink bg-cream px-3 focus-within:outline focus-within:outline-[3px] focus-within:outline-brand-blue">
      <span className="text-muted-foreground">{icon}</span>
      <input
        className="h-full w-full bg-transparent text-base outline-hidden placeholder:text-muted-foreground"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-label={placeholder}
      />
    </label>
  );
}
