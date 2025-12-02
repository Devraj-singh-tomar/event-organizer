import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users Table ----------
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
    imageUrl: v.optional(v.string()),

    hasCompletedOnBoarding: v.boolean(),
    locatoin: v.optional(
      v.object({
        city: v.string(),
        state: v.optional(v.string()),
        country: v.string(),
      })
    ),
    interests: v.optional(v.array(v.string())), // min 3 interests
    freeEventsCreated: v.number(), // 1 free event allowed

    // timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),
});
