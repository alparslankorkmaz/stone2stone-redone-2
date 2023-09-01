import { getSortedPostsData, getPostData } from "../../../../lib/posts";
import getFormattedDate from "../../../../lib/getFormattedDate";
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

  const { img, title, author, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 w-full lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:p-16">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">{title}</h1>
            <p>{author}</p>
            <p>{pubDate}</p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className=" lg:h-[30rem] lg:w-[30rem]">
              <img
                src={`/img/blog-thumbnails/${img}.webp`}
                alt="bird's eye view of a curvy road"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="my-24 mx-10 lg:mx-0 text-slate-900 prose prose-xl">
          <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p className="my-5">
              <Link
                href="/blog"
                className="text-white px-8 py-3 bg-s2s-purple hover:bg-s2s-orange duration-200 font-semibold rounded-xl no-underline"
              >
                ← Back to posts
              </Link>
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
