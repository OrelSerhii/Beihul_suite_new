import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function PostUk({ params }: { params: { slug:string } }) {
  const file = path.join(process.cwd(), "content", "posts", "uk", `${params.slug}.md`);
  if (!fs.existsSync(file)) {
    return <main className="container mx-auto py-10"><h1 className="text-2xl font-bold">Публікацію не знайдено</h1></main>;
  }
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">{String(data.title)}</h1>
      <div className="text-sm opacity-70 mb-6">
        {new Date(String(data.date)).toLocaleDateString("uk-UA")}
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <article dangerouslySetInnerHTML={{ __html: processed.toString() }} />
    </main>
  );
}