import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

export const dynamic = "force-static";
export const revalidate = 60;

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllSlugs("uk").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const post = getPostBySlug("uk", params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: "article",
    },
  };
}

export default async function BlogUkPostPage({ params }: Params) {
  const post = getPostBySlug("uk", params.slug);
  if (!post) return notFound();

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-neutral max-w-none">
        <h1>{post.title}</h1>
        {post.date && (
          <div className="text-sm opacity-60">
            {new Date(post.date).toLocaleDateString("uk-UA")}
          </div>
        )}
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
