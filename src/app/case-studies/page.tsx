"use client";
import { useState } from "react";
import Link from "next/link";

import { studies } from "../../../constant/caseStudies";

export default function page() {
  const [filteredStudies, setFilteredStudies] = useState(studies);
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 justify-center items-center p-5 lg:p-16">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Our work for B2B Technology Companies{" "}
            </h1>
            <p className="lg:text-xl font-medium">
              More than 50 leading technology companies have trusted Stone2Stone
              so far. Learn how our clients, small and large, have grown their
              marketing results and rapidly hit and exceeded their targets.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/case-studies/case-studies.webp"
                alt="people working"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* FILTER */}
      <div className="p-5 lg:px-20 lg:my-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center text-2xl lg:text-5xl font-semibold my-14 lg:leading-tight">
          <h4 className="text-black w-4/5">
            Our previous work that has created{" "}
            <span className="text-s2s-gray">
              lead generation for B2B businesses{" "}
            </span>
          </h4>
          <div className="dropdown my-7 lg:my-0">
            <label
              tabIndex={0}
              className="w-fit h-fit text-white
              text-lg lg:text-xl font-semibold hover:bg-s2s-orange bg-s2s-purple hover:
              duration-200 py-2 ps-16 pe-24 rounded-xl cursor-pointer relative"
            >
              Filter
            </label>
            <img
              src="/img/case-studies/filter.svg"
              alt="filter icon"
              className="absolute right-[3.8rem] top-3 lg:top-8"
            />
            <ul
              tabIndex={0}
              className="dropdown-content p-3 lg:mt-1 top-[2rem] lg:top-[3rem] z-[1] w-full text-sm text-white bg-s2s-purple rounded-b-xl"
            >
              <li className="flex items-center my-3 p-2 hover:bg-s2s-orange duration-200 rounded-xl">
                <input
                  type="radio"
                  name="radio"
                  id="sbp"
                  className="form-radio mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
                ></input>
                <label className="cursor-pointer" htmlFor="sbp">
                  Strategy, Branding and Proposition
                </label>
              </li>
              <li className="flex items-center my-3 p-2 hover:bg-s2s-orange duration-200 rounded-xl">
                <input
                  type="radio"
                  name="radio"
                  id="dm"
                  className="form-radio mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
                ></input>
                <label className="cursor-pointer" htmlFor="dm">
                  Digital Marketing
                </label>
              </li>
              <li className="flex items-center my-3 p-2 hover:bg-s2s-orange duration-200 rounded-xl">
                <input
                  type="radio"
                  name="radio"
                  id="abm"
                  className="form-radio mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
                ></input>
                <label className="cursor-pointer" htmlFor="abm">
                  Account Based Marketing
                </label>
              </li>
              <li className="flex items-center my-3 p-2 hover:bg-s2s-orange duration-200 rounded-xl">
                <input
                  type="radio"
                  name="radio"
                  id="cm"
                  className="form-radio mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
                ></input>
                <label className="cursor-pointer" htmlFor="cm">
                  Content Marketing
                </label>
              </li>
              <li className="flex items-center my-3 p-2 hover:bg-s2s-orange duration-200 rounded-xl">
                <input
                  type="radio"
                  name="radio"
                  id="gam"
                  className="form-radio mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
                ></input>
                <label className="cursor-pointer" htmlFor="gam">
                  Gamification
                </label>
              </li>
              <li className="flex items-center my-3 p-2 hover:bg-s2s-orange duration-200 rounded-xl">
                <input
                  type="radio"
                  name="radio"
                  id="all"
                  className="form-radio mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
                ></input>
                <label className="cursor-pointer" htmlFor="all">
                  All
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-5 lg:m-20">
        <ul className="grid grid-cols-2 lg:grid-cols-9 gap-4 lg:gap-8">
          {filteredStudies.map((study) => {
            const { id, link, img, logo, name, type } = study;
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
                        <p className="lg:my-5 text-sm lg:text-2xl">{type}</p>
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
