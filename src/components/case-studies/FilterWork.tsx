"use client";
import { useState } from "react";
import { studies } from "../../../constant/caseStudies";
import Link from "next/link";

export default function FilterWork() {
  const [filteredStudies, setFilteredStudies] = useState(studies);

  const filterByTag = (tag: string) => {
    setFilteredStudies(studies.filter((study) => study.tag === tag));
  };

  const tags = Array.from(new Set(studies.map((study) => study.tag)));

  return (
    <>
      {" "}
      {/* FILTER */}
      <div className="p-5 lg:px-20 lg:my-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center text-2xl lg:text-5xl font-semibold lg:my-14 lg:leading-tight">
          <h4 className="text-black w-4/5">
            Our previous work that has created{" "}
            <span className="text-s2s-gray">
              lead generation for B2B businesses
            </span>
          </h4>
          <div className="text-lg">
            <select
              className="form-select mt-5 lg:mt-0 w-32 lg:w-52 rounded-xl bg-blend-color-dodge bg-s2s-purple lg:text-xl text-white font-semibold"
              onChange={(e) => filterByTag(e.target.value)}
              value={"default"}
            >
              <option disabled value="default" className="text-center">
                Filter
              </option>

              {tags.map((tag) => {
                return <option key={tag}>{tag}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="m-5 lg:m-20">
        <ul className="grid grid-cols-2 lg:grid-cols-9 gap-4 lg:gap-8">
          {filteredStudies.map((study) => {
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
