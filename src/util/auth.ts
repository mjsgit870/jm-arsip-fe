import NextAuth from "next-auth"
import "next-auth/jwt"
import Credentials from "next-auth/providers/credentials"

declare module "next-auth" {
  interface User {
    id: string
    username: string
  }

  interface Session {
    user: {
      id: string
      username: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Credentials({
    credentials: {
      username: {},
      password: {},
      remember: {}
    },
    authorize: async (credential) => {
      const user = { id: "1", username: "12345", password: "pass" }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (credential?.username === user.username && credential?.password === user.password) {
        return { id: user.id, username: user.username }
      }

      return null
    }
  })],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.username = user.username
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id
        session.user.username = token.username
      }

      return session
    }
  },
})