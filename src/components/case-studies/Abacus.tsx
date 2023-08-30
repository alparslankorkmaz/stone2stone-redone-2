import { studies } from "../../../constant/caseStudies";

export default function Abacus() {
  return (
    <>
      {studies
        .filter((study) => {
          return study.id === 16;
        })
        .map((study) => {
          return (
            <div key={study.id}>
              {/* HERO */}
              <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
                <div className="w-full mt-16 lg:mt-20 grid grid-cols-2 gap-5 justify-center items-center p-5 lg:p-16">
                  {/* TEXT */}
                  <div className="flex flex-col gap-10 md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
                    {/* LOGO */}
                    <div className="flex justify-center lg:justify-normal">
                      <img
                        src={`/img/our-clients/white-logos/${study.logo}.png`}
                        alt="company logo"
                        className="w-1/2"
                      />{" "}
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-semibold">
                      {study.name}
                    </h1>
                    <p className="lg:text-xl font-medium">{study.tag}</p>
                  </div>
                  {/* IMAGE */}
                  <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
                    <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
                      <img
                        src={`/img/case-studies/${study.img}.webp`}
                        alt="people working"
                        className="h-full w-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* CONTENT */}
              <div className="p-5 lg:px-20 lg:my-10">
                <div className="flex justify-between items-center text-2xl lg:text-5xl font-semibold my-14 lg:leading-none">
                  <h2 className="text-black lg:w-4/5">{study.text}</h2>
                </div>
                <div className="flex flex-col gap-10">
                  <div className="grid grid-cols-5 rounded-xl bg-white gap-5 p-5 lg:p-16">
                    <h3 className="col-span-2 text-xl lg:text-4xl text-s2s-gray font-semibold">
                      The <span className="text-black">Challenge</span>
                    </h3>
                    <p className="col-span-3 lg:text-xl">{study.challenge}</p>
                  </div>
                  <div className="grid grid-cols-5 rounded-xl bg-white gap-5 p-5 lg:p-16">
                    <h3 className="col-span-2 text-xl lg:text-4xl text-s2s-gray font-semibold">
                      The <span className="text-black">Target</span>
                    </h3>
                    <p className="col-span-3 lg:text-xl">{study.target}</p>
                  </div>
                  <div className="grid grid-cols-5 rounded-xl bg-white gap-5 p-5 lg:p-16">
                    <h3 className="col-span-2 text-xl lg:text-4xl text-s2s-gray font-semibold">
                      The <span className="text-black">Solution</span>
                    </h3>
                    <p className="col-span-3 lg:text-xl">{study.solution}</p>
                  </div>
                  <div className="grid grid-cols-5 rounded-xl bg-white gap-5 p-5 lg:p-16">
                    <h3 className="col-span-2 text-xl lg:text-4xl text-s2s-gray font-semibold">
                      The <span className="text-black">Outcome</span>
                    </h3>
                    <p className="col-span-3 lg:text-xl">{study.outcome}</p>
                  </div>
                  <div className="grid grid-cols-5 rounded-xl bg-white gap-5 p-5 lg:p-16">
                    <h3 className="col-span-2 text-xl lg:text-4xl text-s2s-gray font-semibold">
                      The <span className="text-black">Results</span>
                    </h3>
                    <ul className="flex flex-col gap-10 col-span-3 lg:text-xl">
                      <li className="flex items-center gap-8">
                        <span className="text-s2s-orange text-2xl lg:text-5xl">
                          {study.icon1}
                        </span>
                        {study.result1}
                      </li>
                      <li className="flex items-center gap-8">
                        <span className="text-s2s-orange text-2xl lg:text-5xl">
                          {study.icon2}
                        </span>
                        {study.result2}
                      </li>
                      <li className="flex items-center gap-8">
                        <span className="text-s2s-orange text-2xl lg:text-5xl">
                          {study.icon3}
                        </span>
                        {study.result3}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      ;
    </>
  );
}
