export default function GSlider4() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="carousel lg:w-[90%] ">
          {/* CHALLENGE 4 */}
          <div
            id="slide4-1"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Challenge 4
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Sustaining Long-Term Engagement
                </h2>
                <p className="text-s2s-gray font-medium">
                  <span className="text-black">
                    Maintaining user interest and engagement
                  </span>{" "}
                  over time can be challenging, especially after the initial
                  novelty wears off.
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
                  href="#slide4-2"
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
          {/* SOLUTION 4 */}
          <div
            id="slide4-2"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Solution 4
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Sustaining Long-Term Engagement{" "}
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    Introduce
                    <span className="text-black">
                      {" "}
                      variety and progression
                    </span>{" "}
                    in the gamified experiences to keep users motivated.
                  </li>
                  <li>
                    Implement a system for
                    <span className="text-black">
                      {" "}
                      regular content updates and new challenges
                    </span>{" "}
                    to maintain user interest.
                  </li>
                </ul>
              </div>
              {/* BUTTONS */}
              <div className="absolute top-1 lg:top-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  title="left arrow"
                  href="#slide4-1"
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
                  href="#slide4-3"
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
          {/* HOW WE TACKLE 4 */}
          <div
            id="slide4-3"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  How we tackle Challenge 4
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Sustaining Long-Term Engagement
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    <span className="text-black">
                      Design a progression system
                    </span>{" "}
                    that rewards users for advancing through different levels or
                    tiers.
                  </li>
                  <li>
                    <span className="text-black">
                      Offer seasonal or thematic events
                    </span>{" "}
                    that introduce new challenges and rewards.
                  </li>
                  <li>
                    <span className="text-black">
                      Analyse user engagement patterns
                    </span>{" "}
                    and adapt gamification strategies to align with changing
                    user preferences.
                  </li>
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="absolute top-1 lg:top-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  title="left arrow"
                  href="#slide4-2"
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
