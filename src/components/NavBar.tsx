"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full px-6 py-4 flex gap-6 items-center bg-transparent">
      <Link href="/" className="text-brand-gold text-xl font-semibold">Головна</Link>
      <Link href="/services" className="hover:text-brand-gold2">Послуги</Link>
      <Link href="/cases" className="hover:text-brand-gold2">Кейси</Link>
      <Link href="/about" className="hover:text-brand-gold2">Про компанію</Link>
      <Link href="/contacts" className="hover:text-brand-gold2">Контакти</Link>
    </nav>
  );
}
