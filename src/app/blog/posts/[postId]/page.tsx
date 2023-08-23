import { getSortedPostsData, getPostData } from "../../../../../lib/posts";
import getFormattedDate from "../../../../../lib/getFormattedDate";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center text-white bg-hero_bg bg-cover bg-bottom min-h-screen">
        <h1 className="text-5xl">{title}</h1>
        <p className="mt-0">{pubDate}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="my-24 text-slate-900 prose prose-xl">
          <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p className="my-5">
              <Link href="/blog">← Back to posts</Link>
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
