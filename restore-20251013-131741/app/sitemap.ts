import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://beihulandpartners.com";
  return [
    { url: `${base}/uk`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/en`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/uk/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/en/blog`, changeFrequency: "daily", priority: 0.7 },
  ];
}