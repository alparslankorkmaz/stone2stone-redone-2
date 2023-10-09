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
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:px-0 lg:py-16 w-full lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Our Blog
            </h1>
            <p className="lg:text-2xl ">
              Our posts that speak about{" "}
              <span className="block">lead generation for B2B businesses</span>
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className=" lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/our-blog/our-blog.webp"
                alt="girl writing a blog post"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5 lg:px-0 lg:my-10 lg:max-w-7xl mx-auto">
        <Posts />
      </div>
    </>
  );
}
