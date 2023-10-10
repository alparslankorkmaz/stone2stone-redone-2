"use client";
import { useState, useMemo } from "react";
import { studies, tags } from "../../../constant/caseStudies";
import Link from "next/link";

export default function FilterWork() {
  const [tag, setTag] = useState("");

  const caseStudies = useMemo(() => {
    return studies.filter((study) => {
      if (tag === "") {
        return studies;
      }
      const studyTag = study.tag;
      return studyTag.includes(tag);
    });
  }, [tag]);

  return (
    <>
      {/* FILTER */}
      <div className="p-5 lg:p-0 lg:my-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center text-2xl lg:text-5xl font-semibold lg:my-14 lg:leading-tight">
          <h4 className="text-black w-1/2">
            Creative lead generation projects{" "}
            <span className="text-s2s-gray">for B2B businesses.</span>
          </h4>
          <div className="text-lg">
            <select
              className="form-select mt-5 lg:mt-0 w-32 lg:w-52 rounded-xl bg-blend-color-dodge bg-s2s-purple lg:text-xl text-white font-semibold"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
            >
              {tags.map((tag, i) => {
                return (
                  <option value={tag.value} key={i}>
                    {tag.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-0 lg:py-20">
        <ul className="grid grid-cols-2 lg:grid-cols-9 gap-4 lg:gap-8">
          {caseStudies.map((study) => {
            const { id, link, img, logo, name, tag } = study;
            return (
              <li
                key={id}
                className="col-span-1 lg:col-span-3 flex justify-center items-center"
              >
                <Link href={link} className="">
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
        </ul>
      </div>
    </>
  );
}
