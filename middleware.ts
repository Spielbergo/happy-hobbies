import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Paths and prefixes to exempt from auth (static files and next internals)
const EXEMPT_PREFIXES = ['/_next/static', '/_next/image', '/favicon.ico', '/static', '/public']

function isExempt(pathname: string) {
  return EXEMPT_PREFIXES.some((p) => pathname.startsWith(p))
}

function unauthorized() {
  return new NextResponse('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Protected"' },
  })
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow exempt paths through so CSS/JS and images can be served without auth
  if (isExempt(pathname)) return NextResponse.next()

  const auth = req.headers.get('authorization')
  if (!auth) return unauthorized()

  const m = auth.match(/^Basic (.+)$/)
  if (!m) return unauthorized()

  let decoded = ''
  try {
    // Edge runtime has atob; fallback to Buffer for node environments
    decoded = typeof atob === 'function' ? atob(m[1]) : Buffer.from(m[1], 'base64').toString('utf8')
  } catch (e) {
    return unauthorized()
  }

  const [user, pass] = decoded.split(':')
  const okUser = process.env.BASIC_AUTH_USER
  const okPass = process.env.BASIC_AUTH_PASS

  if (!okUser || !okPass) return unauthorized()
  if (user === okUser && pass === okPass) return NextResponse.next()

  return unauthorized()
}

export const config = {
  matcher: '/:path*',
}
