import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInService } from "./service/signInService";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials : ", credentials);

        try {
          const result = await signInService(credentials);
          console.log(" result : ", result);

          if (!result || !result.payload) {
            throw new Error("Invalid credentials");
          }

          return result.payload;
        } catch (error) {
          console.error("Authorize error:", error.message);
          return null;
        }
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token && token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
});
