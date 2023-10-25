import type { Metadata } from "next";
import Posts from "@/components/blog/Posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Our blog covers a range of topics, providing valuable insights and inspiration. Explore our posts and discover a wealth of information on various subjects that will leave you informed and entertained.",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex items-center justify-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mx-auto mt-16 grid w-full grid-cols-2 items-center justify-center gap-5 p-5 lg:mt-20 lg:max-w-7xl lg:gap-20 lg:px-0 lg:py-16">
          {/* TEXT */}
          <div className="col-span-2 text-center text-white md:mt-2 lg:col-span-1 lg:mt-0 lg:text-start">
            <h1 className="mb-5 text-4xl font-semibold lg:text-6xl">
              Our Blog
            </h1>
            <p className="lg:text-2xl ">
              Our posts that speak about{" "}
              <span className="block">lead generation for B2B businesses</span>
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 flex items-center justify-end lg:col-span-1">
            <div className=" lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/our-blog/our-blog.webp"
                alt="girl writing a blog post"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center p-5 lg:my-10 lg:max-w-7xl lg:px-0">
        <Posts />
      </div>
    </>
  );
}
