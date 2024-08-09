import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow a specific GitHub account to sign in
      return user.email === "naufalrandika44@gmail.com";
    },
    async redirect() {
      // Redirect to control-panel after successful login
      return "/control-panel";
    },
  },
  
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
