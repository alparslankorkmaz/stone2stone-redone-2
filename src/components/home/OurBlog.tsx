import Link from "next/link";
import { getSortedPostsData } from "../../../lib/posts";
import ListItem from "../blog/ListItem";

export default function OurBlog() {
  const posts = getSortedPostsData();

  return (
    <>
      <div className="p-5 lg:p-0 my-10 lg:max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center text-2xl lg:text-5xl font-semibold my-14 lg:leading-tight">
          <h4 className="text-black w-3/5">
            Our blog{" "}
            <span className="text-s2s-gray">
              that offers insight into helping generate new leads
            </span>
          </h4>
          <Link
            href="/blog"
            className="w-fit h-fit mt-5 lg:mt-0 whitespace-nowrap text-white text-base lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-4 rounded-xl"
          >
            See more
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-9 gap-5">
          {posts.slice(0, 3).map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
