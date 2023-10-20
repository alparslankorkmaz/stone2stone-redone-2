"use client";
import Link from "next/link";
import { studies } from "../../../../constant/caseStudies";

export default function OurWork() {
  const featuredWork = ["Digital Marketing"];
  const featuredStudies = studies.filter(({ tag }) =>
    featuredWork.includes(tag)
  );

  return (
    <>
      <div className="p-5 lg:p-0 lg:max-w-7xl mx-auto my-20">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center text-2xl lg:text-5xl font-semibold my-14 lg:leading-tight">
          <h4 className="text-black w-3/5">
            Our work <span className="text-s2s-gray">in Digital Marketing</span>
          </h4>
          <Link
            href="/case-studies"
            className="w-fit h-fit mt-5 lg:mt-0 whitespace-nowrap text-white text-base lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-4 rounded-xl"
          >
            See more
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredStudies
            .slice(Math.max(featuredStudies.length - 3, 0))
            .map((study) => {
              const { id, link, img, logo, name, tag } = study;
              return (
                <li
                  key={id}
                  className="w-full flex justify-center items-center"
                >
                  <Link href={link}>
                    <div className="relative group w-44 h-44 md:w-72 md:h-72 lg:w-96 lg:h-96">
                      <img
                        src={`/img/case-studies/${img}.webp`}
                        alt="thumbnail"
                        className="object-cover w-full h-full rounded-xl"
                      />
                      <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
                      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
                        <div className="text-white flex flex-col h-full text-center justify-center items-center p-5">
                          <div className="flex justify-center items-center w-28 h-auto">
                            <img
                              src={`/img/our-clients/white-logos/${logo}.png`}
                              alt="company logo"
                              className="my-5 w-full h-full object-contain"
                            />
                          </div>
                          <p className="lg:mb-5 font-semibold text-lg lg:text-4xl">
                            {name}
                          </p>
                          <p className="lg:my-5 text-sm lg:text-2xl">{tag}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </div>
      </div>
    </>
  );
}
