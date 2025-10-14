import { NextResponse } from "next/server";

// Любые "публичные" файлы (расширения) не переписываем
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: Request) {
  const url = new URL(req.url);
  const { pathname } = url;

  // 1) Пропускаем статику и служебные пути БЕЗ переписывания
  if (
    PUBLIC_FILE.test(pathname) ||               // любые файлы с расширениями (.png, .css, .js и т.п.)
    pathname.startsWith("/_next") ||            // next-assets
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/admin") ||            // Decap CMS
    pathname.startsWith("/api") ||              // api
    pathname.startsWith("/brand/") ||           // наша папка статических логотипов
    pathname === "/logo.png"                    // дубликат логотипа в корне
  ) {
    return NextResponse.next();
  }

  // 2) Если локаль не указана в URL — подставляем /uk (твоя дефолтная)
  const hasLocale = /^\/(uk|en)(\/|$)/.test(pathname);
  if (!hasLocale) {
    url.pathname = `/uk${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
