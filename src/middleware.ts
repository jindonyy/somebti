import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const nextUrl = request.nextUrl;
    if (nextUrl.pathname === '/') {
        if (request.cookies.get('access_token')) {
            return NextResponse.rewrite(new URL('/answer', request.url));
        } else {
            return NextResponse.rewrite(new URL('/login', request.url));
        }
    }

    if (nextUrl.pathname === '/login' || nextUrl.pathname === '/signup') {
        if (request.cookies.get('access_token')) {
            return NextResponse.rewrite(new URL('/answer', request.url));
        }
    }
}
