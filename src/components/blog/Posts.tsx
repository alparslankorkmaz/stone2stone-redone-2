import { getSortedPostsData } from "../../../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      <ul className="grid w-full grid-cols-2 items-center justify-center gap-5 lg:grid-cols-9 lg:gap-10">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
