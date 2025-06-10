import { NextResponse, type NextRequest } from "next/server"
import { auth } from "./util/auth"

export async function middleware(request: NextRequest) {
  const session = await auth()
  const { pathname } = request.nextUrl

  const publicPages = ["/login"]
  const privatePages = ["/dashboard"]

  if (session?.user && publicPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!session?.user && privatePages.some((page) => pathname.startsWith(page))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}