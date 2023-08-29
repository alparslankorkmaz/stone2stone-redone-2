export default function SBPSlider2() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="carousel lg:w-[90%] ">
          {/* CHALLENGE 2 */}
          <div
            id="slide2-1"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Challenge 2
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Inconsistent Brand Messaging and Positioning
                </h2>
                <p className="text-s2s-gray font-medium">
                  The company's brand messaging and positioning may be
                  <span className="text-black">
                    {" "}
                    inconsistent or unclear across different communication
                    channels.
                  </span>
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
                  href="#slide2-2"
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
          {/* SOLUTION 2 */}
          <div
            id="slide2-2"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Solution 2
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Inconsistent Brand Messaging and Positioning{" "}
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    Conduct a{" "}
                    <span className="text-black">
                      {" "}
                      brand audit to assess the current state of brand
                    </span>{" "}
                    messaging, visual identity, and market perception.
                  </li>
                  <li>
                    Develop
                    <span className="text-black">
                      {" "}
                      a unified brand messaging framework and positioning
                      strategy Facilitate strategic planning sessions
                    </span>{" "}
                    that communicates the company's unique value to the target
                    audience.
                  </li>
                </ul>
              </div>
              {/* BUTTONS */}
              <div className="absolute top-1 lg:top-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  title="left arrow"
                  href="#slide2-1"
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
                  href="#slide2-3"
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
          {/* HOW WE TACKLE 2 */}
          <div
            id="slide2-3"
            className="carousel-item relative w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  How we tackle Challenge 2
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  Inconsistent Brand Messaging and Positioning{" "}
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    <span className="text-black">
                      Collaborate with your marketing and communication teams
                    </span>{" "}
                    to understand existing brand messaging challenges.
                  </li>
                  <li>
                    <span className="text-black">
                      Create a brand messaging guide
                    </span>{" "}
                    that provides clear guidelines for tone of voice, key
                    messages, and value propositions.
                  </li>
                  <li>
                    Ensure all marketing materials, website content, and
                    communications{" "}
                    <span className="text-black">
                      adhere to the new messaging framework.
                    </span>
                  </li>
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="absolute top-1 lg:top-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  title="left arrow"
                  href="#slide2-2"
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
