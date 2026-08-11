import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [
    Password({
      profile(params) {
        if (params.flow === "signUp" || params.flow === "reset-verification") {
          const password =
            params.flow === "signUp" ? params.password : params.newPassword;
          if (typeof password !== "string" || password.length < 8) {
            throw new Error("Password must be at least 8 characters");
          }
        }
        const email = params.email;
        if (typeof email !== "string") {
          throw new Error("Email is required");
        }
        const name =
          typeof params.username === "string" && params.username.trim() !== ""
            ? params.username.trim()
            : undefined;
        return {
          email,
          ...(name ? { name } : {}),
        };
      },
    }),
  ],
  session: {
    totalDurationMs: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
});
