import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@/lib/generated/prisma" // or wherever you generated it
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import type { SessionStrategy } from "next-auth";
const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async session({ session, token }:{ session: Session; token: JWT }) {
      if (session.user) {
      session.user.id = token.sub!;
      } // so you can access userId from session
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
