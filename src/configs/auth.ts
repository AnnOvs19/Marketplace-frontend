import axios from "axios";
import NextAuth, { User } from "next-auth";
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
          .then((res) => res.data);

        if (user) {
          console.log(user);

          return {
            name: user.user.username,
            email: user.user.email
          };
        }

        return null;
      }
    })
  ],

  pages: {
    signIn: "/loginClient"
  }
});
