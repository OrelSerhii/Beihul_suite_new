import type { Metadata } from "next";
import { withSite, defaultDescription } from "@/lib/seo";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: withSite("Блог"),
  description: defaultDescription,
};

export default function BlogPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Блог</h1>
      <ul className="grid gap-4">
        {posts.map((p) => (
          <li key={p.slug} className="border rounded p-4">
            <h2 className="font-semibold">
              <Link className="underline" href={"/blog/" + p.slug}>{p.title}</Link>
            </h2>
            <p className="text-xs opacity-70">{p.date}</p>
            <p className="text-sm opacity-85">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
