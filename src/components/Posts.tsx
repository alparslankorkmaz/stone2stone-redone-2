import { getSortedPostsData } from "../../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="">
      <h2 className="text-4xl font-bold ">blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
