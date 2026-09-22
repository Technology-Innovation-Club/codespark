import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/* Live event Q&A powering /panel.
   Anyone can ask and upvote (no login). Host actions are gated by a
   shared event password stored in the PANEL_HOST_PASSWORD env var. */

function clean(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("panel_questions").collect();
    return rows
      .map((r) => ({
        id: r._id,
        text: r.text,
        author: r.author ?? null,
        votes: r.votes,
        answered: r.answered,
        createdAt: r.createdAt,
      }))
      .sort((a, b) => b.votes - a.votes || b.createdAt - a.createdAt);
  },
});

export const ask = mutation({
  args: { text: v.string(), author: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const text = clean(args.text);
    if (text.length < 4) throw new Error("Question is a little too short.");
    if (text.length > 280) throw new Error("Keep it under 280 characters.");
    const author = args.author ? clean(args.author).slice(0, 40) : undefined;
    return await ctx.db.insert("panel_questions", {
      text,
      author: author || undefined,
      votes: 1,
      answered: false,
      createdAt: Date.now(),
    });
  },
});

export const upvote = mutation({
  args: { id: v.id("panel_questions") },
  handler: async (ctx, args) => {
    const question = await ctx.db.get(args.id);
    if (!question) throw new Error("That question is gone.");
    const votes = question.votes + 1;
    await ctx.db.patch(args.id, { votes });
    return votes;
  },
});

export const setAnswered = mutation({
  args: { id: v.id("panel_questions"), answered: v.boolean(), password: v.string() },
  handler: async (ctx, args) => {
    if (!(await isHost(args.password))) throw new Error("Not authorized.");
    const question = await ctx.db.get(args.id);
    if (!question) throw new Error("That question is gone.");
    await ctx.db.patch(args.id, { answered: args.answered });
  },
});

export const remove = mutation({
  args: { id: v.id("panel_questions"), password: v.string() },
  handler: async (ctx, args) => {
    if (!(await isHost(args.password))) throw new Error("Not authorized.");
    await ctx.db.delete(args.id);
  },
});

export const verifyHost = mutation({
  args: { password: v.string() },
  handler: async (_ctx, args) => isHost(args.password),
});

async function isHost(password: string): Promise<boolean> {
  const expected = process.env.PANEL_HOST_PASSWORD;
  if (!expected || password.length === 0) return false;
  return password === expected;
}
