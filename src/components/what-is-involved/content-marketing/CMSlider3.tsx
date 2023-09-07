export default function CMSlider3() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="carousel">
          {/* CHALLENGE 3 */}
          <div
            id="slide3-1"
            className="carousel-item relative w-full lg:w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Challenge 3
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  SEO and Content Optimisation
                </h2>
                <p className="text-s2s-gray font-medium">
                  Ensuring that your
                  <span className="text-black">
                    {" "}
                    content is discoverable and ranks well in search engines
                  </span>{" "}
                  is crucial for driving organic traffic.
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
            className="carousel-item relative w-full lg:w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  Solution 3
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  SEO and Content Optimisation{" "}
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    Conduct
                    <span className="text-black">
                      {" "}
                      keyword research to identify relevant and high-impact
                      keywords
                    </span>{" "}
                    for your industry.
                  </li>
                  <li>
                    Optimise your content for on-page SEO elements, such as
                    <span className="text-black">
                      {" "}
                      meta titles, descriptions, and headings.
                    </span>{" "}
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
            className="carousel-item relative w-full lg:w-[90%] bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-5 gap-3 lg:justify-center lg:items-center">
              {/* TEXT */}
              <div className="col-span-4 flex gap-8 flex-col justify-center text-sm lg:text-2xl p-4 lg:p-10">
                <h2 className="text-xl lg:text-4xl font-extrabold text-s2s-purple ">
                  How we tackle Challenge 3
                </h2>
                <h2 className="font-semibold text-xl lg:text-4xl">
                  SEO and Content Optimisation
                </h2>
                <ul className="list-disc list-inside text-s2s-gray font-medium">
                  <li>
                    <span className="text-black">Integrate SEO tools</span> to
                    conduct keyword analysis and track keyword rankings.
                  </li>
                  <li>
                    Create
                    <span className="text-black">
                      {" "}
                      in-depth, informative, and valuable content
                    </span>{" "}
                    that addresses user search intent.
                  </li>
                  <li>
                    Regularly
                    <span className="text-black">
                      update and refresh existing content
                    </span>{" "}
                    to align with evolving search algorithms.
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
