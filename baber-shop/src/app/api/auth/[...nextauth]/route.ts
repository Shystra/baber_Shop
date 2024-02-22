import { db } from "@/app/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
});

export { handler as GET, handler as POST }