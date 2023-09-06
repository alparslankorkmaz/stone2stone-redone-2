export default function ABMSlider3() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="carousel p-5 lg:p-0">
          {/* CHALLENGE 3 */}
          <div
            id="slide3-1"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Challenge 3
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Multi-Touchpoint Engagement
                </h2>
                <p className="text-s2s-gray font-medium">
                  Orchestrating a consistent and engaging
                  <span className="text-black">
                    {" "}
                    multi-channel experience
                  </span>{" "}
                  for each target account can be complex.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="absolute top-1 lg:top-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <div
                  title="left arrow"
                  className="p-2 text-s2s-orange/50 border border-s2s-orange/50 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-6 lg:h-6 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>

                <a
                  href="#slide3-2"
                  title="right arrow"
                  className="p-2 text-s2s-orange transition-colors duration-300 border border-s2s-orange rounded-full rtl:-scale-x-100 lg:mx-6 hover:text-white hover:bg-s2s-orange"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-6 lg:h-6 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* SOLUTION 3 */}
          <div
            id="slide3-2"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Solution 3
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Multi-Touchpoint Engagement{" "}
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    Develop a{" "}
                    <span className="text-black">
                      {" "}
                      comprehensive engagement plan
                    </span>{" "}
                    that outlines touchpoints across different channels (email,
                    social media, events, etc.).
                  </li>
                  <li>
                    Implement an
                    <span className="text-black">
                      {" "}
                      integrated marketing automation platform
                    </span>{" "}
                    to streamline campaign execution.
                  </li>
                </ul>
              </div>
              {/* BUTTONS */}
              <div className="absolute top-1 lg:top-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  title="left arrow"
                  href="#slide3-1"
                  className="p-2 text-s2s-orange transition-colors duration-300 border border-s2s-orange rounded-full rtl:-scale-x-100 hover:text-white hover:bg-s2s-orange"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-6 lg:h-6 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>

                <a
                  href="#slide3-3"
                  title="right arrow"
                  className="p-2 text-s2s-orange transition-colors duration-300 border border-s2s-orange rounded-full rtl:-scale-x-100 lg:mx-6 hover:text-white hover:bg-s2s-orange"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-6 lg:h-6 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* HOW WE TACKLE 3 */}
          <div
            id="slide3-3"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  How we tackle Challenge 3
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Multi-Touchpoint Engagement
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    <span className="text-black">
                      Map out the customer journey
                    </span>{" "}
                    for each target account, considering their unique challenges
                    and buying stages.
                  </li>
                  <li>
                    <span className="text-black">
                      {" "}
                      Use marketing automation
                    </span>{" "}
                    to trigger personalised messages and interactions based on
                    account behaviour and interactions.
                  </li>
                  <li>
                    <span className="text-black">
                      Monitor and analyse engagement data
                    </span>{" "}
                    to optimise the timing and content of touchpoints.{" "}
                  </li>
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="absolute top-1 lg:top-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  title="left arrow"
                  href="#slide3-2"
                  className="p-2 text-s2s-orange transition-colors duration-300 border border-s2s-orange rounded-full rtl:-scale-x-100 hover:text-white hover:bg-s2s-orange"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-6 lg:h-6 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>

                <div
                  title="right arrow"
                  className="p-2 text-s2s-orange/50 border border-s2s-orange/50 rounded-full lg:mx-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-6 lg:h-6 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
