import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  date?: string;
  excerpt?: string;
  cover?: string;
  tags?: string[];
  lang: "uk" | "en";
  slug: string;
};

export type Post = PostMeta & { content: string };

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, "content", "posts");

function postsDir(lang: "uk" | "en") {
  return path.join(POSTS_DIR, lang);
}

export function getAllSlugs(lang: "uk" | "en"): string[] {
  const dir = postsDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(lang: "uk" | "en", slug: string): Post | null {
  const file = path.join(postsDir(lang), `${slug}.md`);
  const alt = path.join(postsDir(lang), `${slug}.mdx`);
  const filepath = fs.existsSync(file) ? file : fs.existsSync(alt) ? alt : null;
  if (!filepath) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    title: data.title ?? slug,
    date: data.date ?? undefined,
    excerpt: data.excerpt ?? undefined,
    cover: data.cover ?? undefined,
    tags: data.tags ?? undefined,
    lang,
    slug,
  };
  return { ...meta, content };
}

export function getPosts(lang: "uk" | "en"): PostMeta[] {
  return getAllSlugs(lang)
    .map((slug) => getPostBySlug(lang, slug)!)
    .filter(Boolean)
    .map(({ content: _c, ...meta }) => meta)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}
