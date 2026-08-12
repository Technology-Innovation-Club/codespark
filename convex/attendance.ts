import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { auth } from "./auth";

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 6;
const DEFAULT_DURATION_MINUTES = 5;
const MAX_DURATION_MINUTES = 60;

function randomCode(): string {
  const bytes = new Uint32Array(CODE_LENGTH);
  crypto.getRandomValues(bytes);
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return code;
}

async function currentProfile(ctx: any) {
  const userId = await auth.getUserId(ctx);
  if (userId === null) throw new Error("Not signed in");
  const profile = await ctx.db
    .query("profiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .unique();
  return { userId, profile };
}

async function requireAdmin(ctx: any) {
  const { userId, profile } = await currentProfile(ctx);
  if (!profile?.is_admin) throw new Error("Admin only");
  return { userId, profile };
}

export const createAttendanceSession = mutation({
  args: {
    durationMinutes: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { userId } = await requireAdmin(ctx);
    const duration = Math.min(
      Math.max(Math.round(args.durationMinutes ?? DEFAULT_DURATION_MINUTES), 1),
      MAX_DURATION_MINUTES,
    );

    let code = randomCode();
    const exists = await ctx.db
      .query("attendance_sessions")
      .withIndex("by_code", (q) => q.eq("code", code))
      .unique();
    if (exists) {
      code = randomCode();
    }

    const expiresAt = Date.now() + duration * 60 * 1000;
    const sessionId = await ctx.db.insert("attendance_sessions", {
      code,
      createdBy: userId,
      durationMinutes: duration,
      expiresAt,
    });

    return { sessionId, code, expiresAt, durationMinutes: duration };
  },
});

export const markAttendance = mutation({
  args: {
    code: v.string(),
  },
  handler: async (ctx, args) => {
    const { userId } = await currentProfile(ctx);
    const normalized = args.code.trim().toUpperCase();
    if (normalized.length === 0) throw new Error("Enter the code from your session");

    const session = await ctx.db
      .query("attendance_sessions")
      .withIndex("by_code", (q) => q.eq("code", normalized))
      .unique();
    if (!session) throw new Error("Invalid code");

    if (Date.now() > session.expiresAt) throw new Error("This code has expired");

    const existing = await ctx.db
      .query("attendance_records")
      .withIndex("by_user_and_session", (q) =>
        q.eq("userId", userId).eq("sessionId", session._id),
      )
      .unique();

    if (existing) return { status: "already", attendedAt: existing.attendedAt };

    const attendedAt = Date.now();
    await ctx.db.insert("attendance_records", {
      userId,
      sessionId: session._id,
      attendedAt,
    });

    return { status: "attended", attendedAt };
  },
});

export const getMyAttendance = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return [];

    const records = await ctx.db
      .query("attendance_records")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .take(500);

    const sessions = new Map<string, any>();
    for (const r of records) {
      if (!sessions.has(r.sessionId)) {
        const s = await ctx.db.get("attendance_sessions", r.sessionId);
        if (s) sessions.set(r.sessionId, s);
      }
    }

    return records
      .map((r) => {
        const s = sessions.get(r.sessionId);
        if (!s) return null;
        return {
          id: r._id,
          session_id: r.sessionId,
          attended_at: r.attendedAt,
          code: s.code,
          expires_at: s.expiresAt,
          duration_minutes: s.durationMinutes,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  },
});

export const getAdminAttendance = query({
  args: {
    now: v.number(),
  },
  handler: async (ctx, args) => {
    const { userId } = await requireAdmin(ctx);

    const session = await ctx.db
      .query("attendance_sessions")
      .withIndex("by_createdBy", (q) => q.eq("createdBy", userId))
      .order("desc")
      .first();

    if (!session) return null;

    const attendees = await ctx.db
      .query("attendance_records")
      .withIndex("by_session", (q) => q.eq("sessionId", session._id))
      .order("asc")
      .take(500);

    const attendeeNames: Record<string, string> = {};
    for (const a of attendees) {
      if (attendeeNames[a.userId]) continue;
      const p = await ctx.db
        .query("profiles")
        .withIndex("by_userId", (q: any) => q.eq("userId", a.userId))
        .unique();
      attendeeNames[a.userId] = p?.username ?? p?.full_name ?? "Participant";
    }

    return {
      session: {
        id: session._id,
        code: session.code,
        duration_minutes: session.durationMinutes,
        expires_at: session.expiresAt,
        expired: args.now > session.expiresAt,
        created_at: session._creationTime,
      },
      attendees: attendees.map((a) => ({
        user_id: a.userId,
        name: attendeeNames[a.userId] ?? "Participant",
        attended_at: a.attendedAt,
      })),
    };
  },
});
