import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, img, title, author, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="flex justify-center items-center mt-4 text-2xl col-span-1 lg:col-span-3">
      <Link href={`/blog/${id}`}>
        <div className="relative group w-44 h-44 md:w-72 md:h-72 lg:w-96 lg:h-96">
          <img
            src={`/img/blog-thumbnails/${img}.webp`}
            alt="thumbnail"
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
            <div className="text-white flex flex-col h-full text-center justify-center items-center p-5">
              <p className="lg:mb-5 font-semibold text-lg lg:text-3xl">
                {title}
              </p>
              <p className="lg:my-3 text-sm lg:text-2xl">{author}</p>
              <p className="lg:my-3 text-sm lg:text-2xl">{formattedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
