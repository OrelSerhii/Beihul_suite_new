import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { DOMAIN } from "@/lib/seo";

const base = `${DOMAIN.replace(/\/$/, "")}/uk`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // статичні сторінки
  const staticPages: MetadataRoute.Sitemap = [
    "", "/services", "/cases", "/blog", "/about", "/contacts",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
  }));

  // пости блогу — lastModified додаємо тільки якщо є дата
  const postPages: MetadataRoute.Sitemap = posts.map((p) => {
    const entry: { url: string; lastModified?: string | Date } = {
      url: `${base}/blog/${p.slug}`,
    };
    if (p.date) entry.lastModified = new Date(p.date);
    return entry;
  });

  return [...staticPages, ...postPages];
}
