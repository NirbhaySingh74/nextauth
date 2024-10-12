import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "E mail", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        //validation
        return {
          id: "user1",
          name: "Nirbhay Singh",
          email: "nirbhaysingh943012@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      console.log(token);

      token.userId = token.sub;
      return token;
    },
    session: ({ session, token, user }: any) => {
      console.log(session);
      if (session && session.user) {
        session.user.id = token.userId;
      }
    },
  },
});

export { handler as GET, handler as POST };
