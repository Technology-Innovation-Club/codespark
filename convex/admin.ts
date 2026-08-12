import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

async function findProfileByEmail(ctx: any, email: string) {
  const normalized = email.trim().toLowerCase();
  return await ctx.db
    .query("profiles")
    .withIndex("by_email", (q: any) => q.eq("email", normalized))
    .unique();
}

export const promoteAdmin = internalMutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const profile = await findProfileByEmail(ctx, args.email);
    if (!profile) {
      throw new Error(`No profile found for email "${args.email}". The user must have signed up first.`);
    }
    await ctx.db.patch(profile._id, { is_admin: true });
    return { promoted: args.email.trim().toLowerCase() };
  },
});

export const demoteAdmin = internalMutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const profile = await findProfileByEmail(ctx, args.email);
    if (!profile) {
      throw new Error(`No profile found for email "${args.email}".`);
    }
    await ctx.db.patch(profile._id, { is_admin: false });
    return { demoted: args.email.trim().toLowerCase() };
  },
});

export const listAdmins = internalQuery({
  args: {},
  handler: async (ctx) => {
    const admins = await ctx.db
      .query("profiles")
      .filter((q) => q.eq(q.field("is_admin"), true))
      .take(200);
    return admins.map((p) => ({
      email: p.email ?? null,
      username: p.username ?? null,
      full_name: p.full_name ?? null,
    }));
  },
});
