import type { Metadata } from "next";
import { withSite, defaultDescription } from "@/lib/seo";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: withSite("Послуги"),
  description: defaultDescription,
};

export default function ServicesPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Послуги</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.slug} className="border rounded-lg p-4">
            <h2 className="font-semibold">{s.title}</h2>
            <p className="text-sm opacity-80">{s.excerpt}</p>
            <div className="mt-2">
              <Link className="underline" href={"/services/" + s.slug}>Детальніше</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
