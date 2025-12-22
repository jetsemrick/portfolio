import { getAllPostIds, getPostData } from "@/lib/posts";
import { Metadata } from "next";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const postData = await getPostData(params.slug);
  return {
    title: `${postData.title} - Portfolio`,
    description: postData.description,
  };
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const postData = await getPostData(params.slug);

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <div className="text-sm text-foreground/40">{postData.date}</div>
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {postData.title}
        </h1>
      </header>
      <div
        className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-medium prose-a:text-foreground prose-a:decoration-neutral-400 prose-a:underline-offset-4 hover:prose-a:decoration-foreground transition-colors"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
      />
    </article>
  );
}

