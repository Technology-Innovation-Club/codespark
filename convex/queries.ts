import { v } from "convex/values";
import { query } from "./_generated/server";
import { auth } from "./auth";

/* The hub UI consumes Supabase-style snake_case shapes with a string `id`.
   These query functions map each Convex document to that wire contract. */

function mapCategories(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    slug: r.slug,
    name: r.name,
    description: r.description ?? null,
    icon: r.icon ?? null,
    color: r.color,
    sort_order: r.sort_order,
  }));
}

function mapModules(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    number: r.number,
    title: r.title,
    subtitle: r.subtitle ?? null,
    week_start: r.week_start,
    week_end: r.week_end,
    topics: r.topics,
    color: r.color,
    sort_order: r.sort_order,
  }));
}

function mapResources(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    title: r.title,
    platform: r.platform ?? null,
    description: r.description ?? null,
    url: r.url,
    logo_url: r.logo_url ?? null,
    category_id: r.categoryId ?? null,
    module_id: r.moduleId ?? null,
    week: r.week ?? null,
    difficulty: r.difficulty,
    duration_minutes: r.duration_minutes,
    has_certificate: r.has_certificate,
    tags: r.tags,
    resource_type: r.resource_type,
    use_cases: r.use_cases ?? null,
    prompt_template: r.prompt_template ?? null,
    is_recommended: r.is_recommended,
    created_at: new Date(r._creationTime).toISOString(),
  }));
}

function mapBooks(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    title: r.title,
    author: r.author,
    cover_url: r.cover_url ?? null,
    category_id: r.category_id ?? null,
    difficulty: r.difficulty,
    reading_minutes: r.reading_minutes,
    description: r.description ?? null,
    download_url: r.download_url ?? null,
    drive_url: r.drive_url ?? null,
    color: r.color,
  }));
}

function mapAchievements(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    code: r.code,
    title: r.title,
    description: r.description,
    icon: r.icon,
    xp: r.xp,
    color: r.color,
  }));
}

function mapAnnouncements(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    title: r.title,
    body: r.body,
  }));
}

function mapProfile(r: any) {
  if (!r) return null;
  return {
    id: r._id,
    user_id: r.userId,
    email: r.email ?? null,
    full_name: r.full_name ?? null,
    username: r.username ?? null,
    team: r.team ?? null,
    avatar_url: r.avatar_url ?? null,
    xp: r.xp,
    level: r.level,
    is_admin: r.is_admin ?? false,
  };
}

function mapStreak(r: any) {
  if (!r) return null;
  return {
    id: r._id,
    user_id: r.userId,
    current_streak: r.current_streak,
    longest_streak: r.longest_streak,
    reading_streak: r.reading_streak,
    last_active_date: r.last_active_date ?? null,
  };
}

function mapDailyActivity(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    user_id: r.userId,
    activity_date: r.activityDate,
    minutes: r.minutes,
    resources_completed: r.resources_completed,
  }));
}

function mapResourceProgress(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    user_id: r.userId,
    resource_id: r.resourceId,
    status: r.status,
    bookmarked: r.bookmarked,
    favorite: r.favorite,
    completed_at: r.completedAt ?? null,
    updated_at: r.updatedAt,
  }));
}

function mapBookProgress(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    user_id: r.userId,
    book_id: r.bookId,
    status: r.status,
    progress_pct: r.progress_pct,
    favorite: r.favorite,
    bookmarked: r.bookmarked,
    notes: r.notes ?? null,
    reflection: r.reflection ?? null,
    finished_at: r.finishedAt ?? null,
    updated_at: r.updatedAt,
  }));
}

function mapNotes(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    user_id: r.userId,
    title: r.title,
    content: r.content,
    pinned: r.pinned,
    created_at: r.createdAt,
    updated_at: r.updatedAt,
  }));
}

function mapUserAchievements(rows: any[]) {
  return rows.map((r) => ({
    id: r._id,
    user_id: r.userId,
    achievement_id: r.achievement_id,
    earned_at: r.earned_at,
  }));
}

export const getCategories = query({
  args: {},
  handler: async (ctx) => mapCategories(await ctx.db.query("categories").order("asc").collect()),
});

export const getModules = query({
  args: {},
  handler: async (ctx) => mapModules(await ctx.db.query("modules").order("asc").collect()),
});

export const getResources = query({
  args: {},
  handler: async (ctx) => mapResources(await ctx.db.query("resources").collect()),
});

export const getBooks = query({
  args: {},
  handler: async (ctx) => mapBooks(await ctx.db.query("books").collect()),
});

export const getAchievements = query({
  args: {},
  handler: async (ctx) => mapAchievements(await ctx.db.query("achievements").collect()),
});

export const getAnnouncements = query({
  args: {},
  handler: async (ctx) =>
    mapAnnouncements(await ctx.db.query("announcements").order("desc").take(10)),
});

export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return null;
    const result = await ctx.db.query("profiles").withIndex("by_userId", (q) => q.eq("userId", userId)).unique();
    return mapProfile(result);
  },
});

export const getStreak = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return null;
    const result = await ctx.db.query("streaks").withIndex("user", (q) => q.eq("userId", userId)).unique();
    return mapStreak(result);
  },
});

export const getDailyActivity = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return [];
    const rows = await ctx.db.query("daily_activity").withIndex("userDate", (q) => q.eq("userId", userId)).order("desc").take(120);
    return mapDailyActivity(rows);
  },
});

export const getResourceProgress = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return [];
    const rows = await ctx.db.query("resource_progress").withIndex("user", (q) => q.eq("userId", userId)).collect();
    return mapResourceProgress(rows);
  },
});

export const getBookProgress = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return [];
    const rows = await ctx.db.query("book_progress").withIndex("user", (q) => q.eq("userId", userId)).collect();
    return mapBookProgress(rows);
  },
});

export const getNotes = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return [];
    const rows = await ctx.db.query("notes").withIndex("user", (q) => q.eq("userId", userId)).order("desc").collect();
    return mapNotes(rows);
  },
});

export const getUserAchievements = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) return [];
    const rows = await ctx.db.query("user_achievements").withIndex("user", (q) => q.eq("userId", userId)).collect();
    return mapUserAchievements(rows);
  },
});

export const getAchievement = query({
  args: { id: v.id("achievements") },
  handler: async (ctx, args) => {
    const doc = await ctx.db.get(args.id);
    return doc ? mapAchievements([doc])[0] : null;
  },
});