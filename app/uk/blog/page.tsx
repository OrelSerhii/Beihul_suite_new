import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostMeta = { title:string; date:string; slug:string; summary?:string };

export default function BlogUk() {
  const dir = path.join(process.cwd(), "content", "posts", "uk");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const posts: PostMeta[] = files
    .filter(f => f.endsWith(".md"))
    .map(file => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return {
        title: String(data.title),
        date: String(data.date),
        slug: String(data.slug),
        summary: data.summary ? String(data.summary) : undefined
      };
    })
    .sort((a,b)=> (a.date < b.date ? 1 : -1));

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Останні публікації</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug}>
            <a className="text-xl underline" href={`/uk/blog/${p.slug}`}>{p.title}</a>
            <div className="text-sm opacity-70">
              {new Date(p.date).toLocaleDateString("uk-UA")}
            </div>
            {p.summary && <p>{p.summary}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}