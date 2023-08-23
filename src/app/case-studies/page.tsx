export default function page() {
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
                  className="mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
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
                  className="mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
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
                  className="mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
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
                  className="mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
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
                  className="mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
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
                  className="mx-2 cursor-pointer rounded-none text-s2s-orange w-3 h-3"
                ></input>
                <label className="cursor-pointer" htmlFor="all">
                  All
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
