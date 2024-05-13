import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        identifier: {},
        password: {}
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials.password) return null;

        const user = await axios
          .post("http://127.0.0.1:1337/api/auth/local", {
            identifier: credentials.identifier,
            password: credentials.password
          })
          .then((res) => res.data)
          .catch((res) => alert(res.data));

        if (user) {
          return {
            name: user.user.username,
            id: user.user.id,
            token: user.jwt
          };
        }

        return null;
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    }
  },

  pages: {
    signIn: "/loginClient" || "/loginSeller"
  }
});
