import type { NextAuthOptions, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserAuthentication } from "../../hooks/getUserAuthentication";
import { UserData } from "@/types/user";

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
        /*         const users = [
          { id: "1", name: "test", password: "test" },
          { id: "2", name: "Hieu", password: "hieu" },
          { id: "3", name: "Khoi", password: "khoi" },
        ];
        for (let user of users) {
          if (
            credentials?.username === user.name &&
            credentials.password === user.password
          ) {
            console.log("User found:", user);
            return user;
          }
        } */
        if (
          credentials?.username != undefined &&
          credentials?.password != undefined
        ) {
          try {
            const user = await getUserAuthentication(
              credentials.username,
              credentials.password
            );

            // const userData: UserData = {
            //   id: user._id,
            //   name: user.username, 
            // };
            

            return user;
          } catch (error) {
            console.error("Authentication failed:", error);
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({token, user}) {
        if (user) {
            token.user = user;
        }
        return token;
    },

    async session({session, token}) {
      //console.log("token: ",token) 
      if(token)
        {
          session.user.name = (token.user as UserData).username;
          session.user.isAdmin = (token.user as UserData).isadmin;
          session.user._id = (token.user as UserData)._id;
        }
      //console.log("session: ",session) 
      return session;
    }
},
};
