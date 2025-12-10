import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // This middleware is currently not in use.
  // The i18n logic has been simplified to avoid automatic redirection issues.
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
