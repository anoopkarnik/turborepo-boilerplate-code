import NextAuth from "next-auth/next";
import { NEXT_AUTH_CONFIG } from "../../../lib/auth";



const handler = NextAuth(NEXT_AUTH_CONFIG as any);

export {handler as GET, handler as POST}