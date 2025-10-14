"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/uk", label: "Головна" },
  { href: "/uk/services", label: "Послуги" },
  { href: "/uk/cases", label: "Кейси" },
  { href: "/uk/blog", label: "Блог" },
  { href: "/uk/about", label: "Про компанію" },
  { href: "/uk/contacts", label: "Контакти" },
];
export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between">
        <Link href="/uk" className="text-lg font-semibold tracking-tight">
          Бейгул&nbsp;<span className="text-brand-gold">&</span>&nbsp;Партнери
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-[15px]">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`hover:opacity-80 ${pathname?.startsWith(l.href) ? "font-medium underline underline-offset-8" : ""}`}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/uk/contacts" className="hidden md:inline-block rounded-xl bg-brand text-white px-4 py-2">Запис на консультацію</Link>
      </div>
    </nav>
  );
}
