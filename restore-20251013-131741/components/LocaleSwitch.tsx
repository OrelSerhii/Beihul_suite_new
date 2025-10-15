"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Перемикає перший сегмент шляху між /uk та /en.
 * Зберігає решту шляху (якщо ти будеш на /uk/services -> перейде на /en/services).
 */
export default function LocaleSwitch() {
  const pathname = usePathname() || "/uk";
  const parts = pathname.split("/").filter(Boolean); // ["uk", "services", ...]
  let current = parts[0] === "en" ? "en" : "uk";
  let target = current === "en" ? "uk" : "en";
  if (parts.length === 0) parts.push("uk");
  parts[0] = target;
  const href = "/" + parts.join("/");

  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full border border-[#013026] text-[#013026] hover:bg-[#013026] hover:text-white transition"
    >
      {target.toUpperCase()}
    </Link>
  );
}
