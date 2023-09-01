import Posts from "@/components/blog/Posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 w-full lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:p-16">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Our Blog
            </h1>
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

      <div className="flex flex-col justify-center items-center p-5 lg:px-20 lg:my-10">
        <div className="flex justify-between items-center text-2xl lg:text-5xl font-semibold lg:my-14 lg:leading-tight">
          <h4 className="text-black w-4/5">
            <span className="text-s2s-gray">Our posts that speak about</span>{" "}
            lead generation for B2B businesses
          </h4>
        </div>
        <Posts />
      </div>
    </>
  );
}
