import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        const users = [
          { id: "1", name: "test", password: "test" },
          { id: "2", name: "Hieu", password: "hieu" },
          { id: "3", name: "Khoi", password: "khoi" },
        ];
        for (let user of users) {
          if (
            credentials?.username === user.name &&
            credentials.password === user.password
          ) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
};
