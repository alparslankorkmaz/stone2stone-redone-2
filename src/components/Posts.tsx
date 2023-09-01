import { getSortedPostsData } from "../../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      <ul className="w-full grid gap-5 lg:gap-10 justify-center items-center grid-cols-2 lg:grid-cols-9">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
