import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILES = [
  "/favicon.ico","/robots.txt","/sitemap.xml","/manifest.webmanifest"
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // пропускаємо статичні та Next-файли
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || PUBLIC_FILES.includes(pathname)) {
    return NextResponse.next();
  }

  // якщо звернулися до кореня — редірект на /uk
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/uk";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
