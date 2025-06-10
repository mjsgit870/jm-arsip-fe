import NextAuth from "next-auth"
import "next-auth/jwt"
import Credentials from "next-auth/providers/credentials"

declare module "next-auth" {
  interface User {
    id: string
    username: string
    jabatan: string
  }

  interface Session {
    user: {
      id: string
      username: string
      jabatan: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string
    jabatan: string
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
      const user = { id: "1", username: "12345", password: "pass", jabatan: "IT Support & Services Assistant" }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (credential?.username === user.username && credential?.password === user.password) {
        return { id: user.id, username: user.username, jabatan: user.jabatan }
      }

      return null
    }
  })],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log("token from jwt callbacks", token)
      console.log("user from jwt callbacks", user)
      if (user) {
        token.id = user.id
        token.username = user.username
        token.jabatan = user.jabatan
      }

      return token
    },
    session: async ({ session, token }) => {
      console.log("session from session callbacks", session)
      console.log("token from session callbacks", token)
      if (token) {
        session.user.id = token.id
        session.user.username = token.username
        session.user.jabatan = token.jabatan
      }

      return session
    }
  },
})