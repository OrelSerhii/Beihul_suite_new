"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string; isActive?: (p: string) => boolean };

export default function SiteNav() {
  const pathname = usePathname() || "/";
  const items: Item[] = [
    { href: "/uk", label: "Головна", isActive: (p) => p === "/" || p.startsWith("/uk") || p.startsWith("/en") },
    { href: "/services", label: "Послуги", isActive: (p) => p.startsWith("/services") },
    { href: "/cases", label: "Кейси", isActive: (p) => p.startsWith("/cases") },
    { href: "/blog", label: "Блог", isActive: (p) => p.startsWith("/blog") },
    { href: "/about", label: "Про компанію", isActive: (p) => p.startsWith("/about") },
    { href: "/contacts", label: "Контакти", isActive: (p) => p.startsWith("/contacts") },
  ];

  return (
    <nav className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap gap-4 text-sm">
      {items.map((it) => {
        const active = it.isActive ? it.isActive(pathname) : pathname === it.href;
        const cls = active
          ? "font-semibold underline underline-offset-4"
          : "opacity-80 hover:opacity-100";
        return (
          <Link key={it.href} href={it.href} className={cls}>
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}
