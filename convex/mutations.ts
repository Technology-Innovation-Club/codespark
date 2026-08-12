import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { auth } from "./auth";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function capitalizeTeam(team: string | undefined): string | undefined {
  if (!team) return team;
  const t = team.trim().replace(/\b[a-z]/g, (c) => c.toUpperCase());
  return t === "" ? undefined : t;
}

function yesterday(): string {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
}

async function requireProfile(ctx: any) {
  const userId = await auth.getUserId(ctx);
  if (userId === null) throw new Error("Not signed in");
  let profile = await ctx.db
    .query("profiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .unique();
  if (!profile) {
    profile = await ctx.db.insert("profiles", {
      userId,
      xp: 0,
      level: 1,
    });
  }
  return { userId, profile };
}

async function touchToday(ctx: any, userId: any, minutes: number, completed: number) {
  const t = today();
  const existing = await ctx.db
    .query("daily_activity")
    .withIndex("userDate", (q: any) => q.eq("userId", userId).eq("activityDate", t))
    .unique();

  if (existing) {
    await ctx.db.patch(existing._id, {
      minutes: existing.minutes + minutes,
      resources_completed: existing.resources_completed + completed,
    });
  } else {
    await ctx.db.insert("daily_activity", {
      userId,
      activityDate: t,
      minutes,
      resources_completed: completed,
    });
  }

  const streak = await ctx.db
    .query("streaks")
    .withIndex("user", (q: any) => q.eq("userId", userId))
    .unique();

  if (!streak) {
    await ctx.db.insert("streaks", {
      userId,
      current_streak: 1,
      longest_streak: 1,
      reading_streak: 0,
      last_active_date: t,
    });
  } else if (streak.last_active_date !== t) {
    const next = streak.last_active_date === yesterday() ? streak.current_streak + 1 : 1;
    await ctx.db.patch(streak._id, {
      current_streak: next,
      longest_streak: Math.max(next, streak.longest_streak),
      last_active_date: t,
    });
  }
}

async function addXp(ctx: any, profile: any, amount: number) {
  const xp = (profile.xp ?? 0) + amount;
  await ctx.db.patch(profile._id, {
    xp,
    level: Math.max(1, Math.floor(xp / 500) + 1),
  });
}

export const completeProfile = mutation({
  args: {
    username: v.string(),
    full_name: v.optional(v.string()),
    team: v.optional(v.string()),
    email: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) throw new Error("Not signed in");
    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .unique();
    if (existing) {
      await ctx.db.patch(existing._id, {
        username: args.username,
        full_name: args.full_name ?? args.username,
        team: capitalizeTeam(args.team),
        email: args.email,
      });
      return existing._id;
    }
    return await ctx.db.insert("profiles", {
      userId,
      username: args.username,
      full_name: args.full_name ?? args.username,
      team: capitalizeTeam(args.team),
      email: args.email,
      xp: 0,
      level: 1,
    });
  },
});

export const updateResourceProgress = mutation({
  args: {
    resourceId: v.id("resources"),
    status: v.optional(v.union(v.literal("not_started"), v.literal("in_progress"), v.literal("completed"))),
    bookmarked: v.optional(v.boolean()),
    favorite: v.optional(v.boolean()),
    minutes: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { userId, profile } = await requireProfile(ctx);
    const now = Date.now();
    const existing = await ctx.db
      .query("resource_progress")
      .withIndex("userResource", (q) => q.eq("userId", userId).eq("resourceId", args.resourceId))
      .unique();

    const patch = {
      ...(args.status !== undefined ? { status: args.status } : {}),
      ...(args.bookmarked !== undefined ? { bookmarked: args.bookmarked } : {}),
      ...(args.favorite !== undefined ? { favorite: args.favorite } : {}),
      ...(args.status === "completed" ? { completedAt: now } : {}),
      updatedAt: now,
    };

    if (existing) {
      await ctx.db.patch(existing._id, patch);
    } else {
      await ctx.db.insert("resource_progress", {
        userId,
        resourceId: args.resourceId,
        status: args.status ?? "not_started",
        bookmarked: args.bookmarked ?? false,
        favorite: args.favorite ?? false,
        updatedAt: now,
      });
    }

    if (args.status === "completed") {
      await touchToday(ctx, userId, args.minutes ?? 0, 1);
      await addXp(ctx, profile, 50);
    }
  },
});

export const updateBookProgress = mutation({
  args: {
    bookId: v.id("books"),
    status: v.optional(
      v.union(v.literal("not_started"), v.literal("in_progress"), v.literal("completed")),
    ),
    progress_pct: v.optional(v.number()),
    favorite: v.optional(v.boolean()),
    bookmarked: v.optional(v.boolean()),
    notes: v.optional(v.string()),
    reflection: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { userId, profile } = await requireProfile(ctx);
    const now = Date.now();
    const existing = await ctx.db
      .query("book_progress")
      .withIndex("userBook", (q) => q.eq("userId", userId).eq("bookId", args.bookId))
      .unique();

    const patch = {
      ...(args.status !== undefined ? { status: args.status } : {}),
      ...(args.progress_pct !== undefined ? { progress_pct: args.progress_pct } : {}),
      ...(args.favorite !== undefined ? { favorite: args.favorite } : {}),
      ...(args.bookmarked !== undefined ? { bookmarked: args.bookmarked } : {}),
      ...(args.notes !== undefined ? { notes: args.notes } : {}),
      ...(args.reflection !== undefined ? { reflection: args.reflection } : {}),
      ...(args.status === "completed" ? { finishedAt: now } : {}),
      updatedAt: now,
    };

    if (existing) {
      await ctx.db.patch(existing._id, patch);
    } else {
      await ctx.db.insert("book_progress", {
        userId,
        bookId: args.bookId,
        status: args.status ?? "not_started",
        progress_pct: args.progress_pct ?? 0,
        favorite: args.favorite ?? false,
        bookmarked: args.bookmarked ?? false,
        updatedAt: now,
      });
    }

    if (args.status === "completed") {
      await touchToday(ctx, userId, 30, 0);
      await addXp(ctx, profile, 150);
    }
  },
});

export const saveNote = mutation({
  args: {
    id: v.optional(v.id("notes")),
    title: v.string(),
    content: v.string(),
    pinned: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { userId } = await requireProfile(ctx);
    const now = Date.now();
    if (args.id) {
      await ctx.db.patch(args.id, {
        title: args.title,
        content: args.content,
        pinned: args.pinned ?? false,
        updatedAt: now,
      });
      return args.id;
    }
    return await ctx.db.insert("notes", {
      userId,
      title: args.title,
      content: args.content,
      pinned: args.pinned ?? false,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const deleteNote = mutation({
  args: { id: v.id("notes") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});