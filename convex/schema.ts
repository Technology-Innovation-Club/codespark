import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export const userRoles = {
  admin: "admin",
  participant: "participant",
} as const;

export const difficultyLevels = {
  beginner: "beginner",
  intermediate: "intermediate",
  advanced: "advanced",
} as const;

export const progressStatuses = {
  notStarted: "not_started",
  inProgress: "in_progress",
  completed: "completed",
} as const;

const difficulty = v.union(
  v.literal("beginner"),
  v.literal("intermediate"),
  v.literal("advanced"),
);

const progressStatus = v.union(
  v.literal("not_started"),
  v.literal("in_progress"),
  v.literal("completed"),
);

export default defineSchema({
  ...authTables,
  examples: defineTable({
    name: v.string(),
    value: v.number(),
  }),

  profiles: defineTable({
    userId: v.id("users"),
    email: v.optional(v.string()),
    full_name: v.optional(v.string()),
    username: v.optional(v.string()),
    team: v.optional(v.string()),
    avatar_url: v.optional(v.string()),
    xp: v.number(),
    level: v.number(),
  })
    .index("by_userId", ["userId"])
    .searchIndex("search_name", { searchField: "full_name" }),

  categories: defineTable({
    slug: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
    icon: v.optional(v.string()),
    color: v.string(),
    sort_order: v.number(),
  }).index("slug", ["slug"]),

  modules: defineTable({
    number: v.number(),
    title: v.string(),
    subtitle: v.optional(v.string()),
    week_start: v.number(),
    week_end: v.number(),
    topics: v.array(v.string()),
    color: v.string(),
    sort_order: v.number(),
  }),

  resources: defineTable({
    title: v.string(),
    platform: v.optional(v.string()),
    description: v.optional(v.string()),
    url: v.string(),
    logo_url: v.optional(v.string()),
    categoryId: v.optional(v.id("categories")),
    moduleId: v.optional(v.id("modules")),
    week: v.optional(v.number()),
    difficulty,
    duration_minutes: v.number(),
    has_certificate: v.boolean(),
    tags: v.array(v.string()),
    resource_type: v.string(),
    use_cases: v.optional(v.string()),
    prompt_template: v.optional(v.string()),
    is_recommended: v.boolean(),
  })
  .index("category", ["categoryId"])
  .index("module", ["moduleId"])
  .searchIndex("title", { searchField: "title" }),

  books: defineTable({
    title: v.string(),
    author: v.string(),
    cover_url: v.optional(v.string()),
    category_id: v.optional(v.id("categories")),
    difficulty,
    reading_minutes: v.number(),
    description: v.optional(v.string()),
    download_url: v.optional(v.string()),
    drive_url: v.optional(v.string()),
    color: v.string(),
  }),

  resource_progress: defineTable({
    userId: v.id("users"),
    resourceId: v.id("resources"),
    status: progressStatus,
    bookmarked: v.boolean(),
    favorite: v.boolean(),
    completedAt: v.optional(v.number()),
    updatedAt: v.number(),
  })
  .index("user", ["userId"])
  .index("userResource", ["userId", "resourceId"]),

  book_progress: defineTable({
    userId: v.id("users"),
    bookId: v.id("books"),
    status: progressStatus,
    progress_pct: v.number(),
    favorite: v.boolean(),
    bookmarked: v.boolean(),
    notes: v.optional(v.string()),
    reflection: v.optional(v.string()),
    finishedAt: v.optional(v.number()),
    updatedAt: v.number(),
  })
  .index("user", ["userId"])
  .index("userBook", ["userId", "bookId"]),

  notes: defineTable({
    userId: v.id("users"),
    title: v.string(),
    content: v.string(),
    pinned: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("user", ["userId"]),

  daily_activity: defineTable({
    userId: v.id("users"),
    activityDate: v.string(),
    minutes: v.number(),
    resources_completed: v.number(),
  }).index("userDate", ["userId", "activityDate"]),

  streaks: defineTable({
    userId: v.id("users"),
    current_streak: v.number(),
    longest_streak: v.number(),
    reading_streak: v.number(),
    last_active_date: v.optional(v.string()),
  }).index("user", ["userId"]),

  achievements: defineTable({
    code: v.string(),
    title: v.string(),
    description: v.string(),
    icon: v.string(),
    xp: v.number(),
    color: v.string(),
  }).index("code", ["code"]),

  user_achievements: defineTable({
    userId: v.id("users"),
    achievement_id: v.id("achievements"),
    earned_at: v.number(),
  })
  .index("user", ["userId"])
  .index("userAch", ["userId", "achievement_id"]),

  announcements: defineTable({
    title: v.string(),
    body: v.string(),
  }),
});