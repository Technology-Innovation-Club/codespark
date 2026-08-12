# CodeSpark

CodeSpark captures the learning journey behind the Innovation Challenge: a **Challenge Resource Hub** with curated resources, books, certificates, AI tools, notes, streaks & XP, plus a **live session attendance system**.

Built with React + TypeScript + Vite, TanStack Router, Tailwind CSS v4, and [Convex](https://convex.dev) as the backend.

## Stack

- **Frontend** — React 19, TanStack Router (file-based routing via `vite.config.ts` plugin), TanStack Query + `@convex-dev/react-query`, Tailwind v4 (neobrutalist design system in `src/components/nb.tsx`)
- **Backend** — Convex (`convex/`): PostgreSQL-compatible reactive database, auth (`@convex-dev/auth`, password provider), queries/mutations in `convex/queries.ts`, `convex/mutations.ts`, `convex/attendance.ts`

## Getting started

```bash
pnpm install
pnpm dev          # start Vite dev server
pnpm convex:dev   # start the Convex local/dev backend
```

Convex config lives in `.env.local` (`VITE_CONVEX_URL`, `JWT_PRIVATE_KEY`, etc.).

## Scripts

| Command             | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `pnpm dev`          | Vite dev server                                    |
| `pnpm build`        | Production build                                   |
| `pnpm typecheck`    | Run `tsc -b` (heavy — only when needed)            |
| `pnpm lint`         | ESLint                                             |
| `pnpm convex:dev`   | Run Convex dev backend                             |
| `pnpm convex:deploy`| Deploy Convex functions + schema                   |
| `pnpm convex:seed`  | Seed the catalogue (`convex run seed`)             |
| `pnpm admin:promote <email>` | Promote a user to admin                    |

> Note on memory: this project is developed on machines with limited RAM. Prefer
> targeted checks (`npx eslint <files>`, `npx tsc -p convex/tsconfig.json`) over
> full `pnpm typecheck` when only a few files changed.

## Attendance system

Admins open a short-lived session code (default **5 minutes**, up to 60) from the
**Attendance** page and share it live during online sessions. Participants enter
the code on the same page to mark themselves present; everyone can review their
attendance history there.

- Tables: `attendance_sessions`, `attendance_records`
- Functions: `convex/attendance.ts`
- Page: `src/routes/challenge-resource-hub/_hub/attendance.tsx`

### Promoting a user to admin

Admins are designated by the project owner via a script that requires Convex CLI
access to the deployment — only someone with database access can run it.

```bash
# Promote (the user must have signed up first)
./scripts/promote-admin.sh promote you@example.com

# Revoke admin
./scripts/promote-admin.sh demote you@example.com

# List current admins
./scripts/promote-admin.sh list
```

Under the hood this calls the internal Convex functions in `convex/admin.ts`
(`admin:promoteAdmin`, `admin:demoteAdmin`, `admin:listAdmins`) through
`npx convex run`, so it only works for whoever owns/logs into the Convex project.