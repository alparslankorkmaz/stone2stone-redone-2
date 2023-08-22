export default function Testimonials() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="carousel lg:w-[90%] ">
          {/* SLIDE 1 */}
          <div
            id="slide1"
            className="carousel-item relative w-full bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-10 gap-3 lg:justify-center lg:items-center">
              {/* IMAGE */}
              <div className="col-span-4 lg:col-span-3 flex justify-center">
                <img
                  src="/img/testimonials/amisha.webp"
                  className="object-cover rounded-lg w-96 h-full"
                  alt="customer image"
                />
              </div>
              {/* TEXT */}
              <div className="col-span-6 lg:col-span-7 flex flex-col justify-center text-sm lg:text-2xl lg:p-5">
                <p className="text-5xl font-semibold text-s2s-purple ">“</p>

                <p className=" text-s2s-gray">
                  Having worked with Stone2stone on many projects,{" "}
                  <span className="text-black">
                    {" "}
                    we have always found that the team possesses the right
                    balance of professionalism, knowledge and creativity to suit
                    our needs.{" "}
                  </span>
                  Stone2stone listens to our briefs, understands the challenges
                  and has always created solutions that hit the spot.
                </p>

                <div>
                  <p className="mt-6">Amisha Shah,</p>
                  <p className="text-s2s-gray">
                    Senior International{" "}
                    <span className="block lg:inline">Marketing at ECI</span>
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="absolute bottom-1 lg:bottom-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  href="#slide6"
                  title="left arrow"
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
                  href="#slide2"
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
          {/* SLIDE 2 */}
          <div
            id="slide2"
            className="carousel-item relative w-full bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-10 gap-3 lg:justify-center lg:items-center">
              {/* IMAGE */}
              <div className="col-span-4 lg:col-span-3 flex justify-center">
                <img
                  src="/img/testimonials/luke.webp"
                  className="object-cover rounded-lg w-96 h-full"
                  alt="customer image"
                />
              </div>
              {/* TEXT */}
              <div className="col-span-6 lg:col-span-7 flex flex-col justify-center text-sm lg:text-2xl lg:p-5">
                <p className="text-5xl font-semibold text-s2s-purple ">“</p>

                <p className=" text-s2s-gray">
                  Working with Stone2stone has been an absolute game-changer for
                  our marketing initiatives.{" "}
                  <span className="text-black">
                    From the very beginning, their team demonstrated an in-depth
                    understanding of our unique needs, challenges, and target
                    audience.{" "}
                  </span>
                </p>

                <div>
                  <p className="mt-6">Luke Day,</p>
                  <p className="text-s2s-gray">
                    Partner Accounts Manager{" "}
                    <span className="block lg:inline">at Red Hat</span>
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="absolute bottom-1 lg:bottom-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  href="#slide1"
                  title="left arrow"
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
                  href="#slide3"
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
          {/* SLIDE 3 */}
          <div
            id="slide3"
            className="carousel-item relative w-full bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-10 gap-3 lg:justify-center lg:items-center">
              {/* IMAGE */}
              <div className="col-span-4 lg:col-span-3 flex justify-center">
                <img
                  src="/img/testimonials/jen.webp"
                  className="object-cover rounded-lg w-96 h-full"
                  alt="customer image"
                />
              </div>
              {/* TEXT */}
              <div className="col-span-6 lg:col-span-7 flex flex-col justify-center text-sm lg:text-2xl lg:p-5">
                <p className="text-5xl font-semibold text-s2s-purple ">“</p>

                <p className=" text-s2s-gray">
                  I have used Stone2stone for a year now and would highly
                  recommend them.
                  <span className="text-black">
                    {" "}
                    They are responsive, adaptable, reliable and creative. A
                    real pleasure to work with.{" "}
                  </span>
                </p>

                <div>
                  <p className="mt-6">Jen Falasca,</p>
                  <p className="text-s2s-gray">
                    Senior Marketing Director{" "}
                    <span className="block lg:inline">at ECI</span>
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="absolute bottom-1 lg:bottom-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  href="#slide2"
                  title="left arrow"
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
                  href="#slide4"
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
          {/* SLIDE 4 */}
          <div
            id="slide4"
            className="carousel-item relative w-full bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-10 gap-3 lg:justify-center lg:items-center">
              {/* IMAGE */}
              <div className="col-span-4 lg:col-span-3 flex justify-center">
                <img
                  src="/img/testimonials/neil.webp"
                  className="object-cover rounded-lg w-96 h-full"
                  alt="customer image"
                />
              </div>
              {/* TEXT */}
              <div className="col-span-6 lg:col-span-7 flex flex-col justify-center text-sm lg:text-2xl lg:p-5">
                <p className="text-5xl font-semibold text-s2s-purple ">“</p>

                <p className=" text-s2s-gray">
                  I have always used the team at Stone2stone. They have always
                  been great to work with.
                  <span className="text-black">
                    {" "}
                    They have a great understanding of the IT channel and have
                    delivered fantastic creative work for us time and time
                    again.{" "}
                  </span>
                </p>

                <div>
                  <p className="mt-6">Neil Langridge,</p>
                  <p className="text-s2s-gray">
                    Marketing Director{" "}
                    <span className="block lg:inline">at e92 Plus</span>
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="absolute bottom-1 lg:bottom-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  href="#slide3"
                  title="left arrow"
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
                  href="#slide5"
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
          {/* SLIDE 5 */}
          <div
            id="slide5"
            className="carousel-item relative w-full bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-10 gap-3 lg:justify-center lg:items-center">
              {/* IMAGE */}
              <div className="col-span-4 lg:col-span-3 flex justify-center">
                <img
                  src="/img/testimonials/andreea.webp"
                  className="object-cover rounded-lg w-96 h-full"
                  alt="customer image"
                />
              </div>
              {/* TEXT */}
              <div className="col-span-6 lg:col-span-7 flex flex-col justify-center text-sm lg:text-2xl lg:p-5">
                <p className="text-5xl font-semibold text-s2s-purple ">“</p>

                <p className=" text-s2s-gray">
                  Stone2stone have been my go to marketing agency for over a
                  year now.
                  <span className="text-black">
                    {" "}
                    They are always reactive and imaginative in their approach
                    and are definitely fun to work with.{" "}
                  </span>
                  I would 1000% recommend them.{" "}
                </p>

                <div>
                  <p className="mt-6">Andreea Caesar,</p>
                  <p className="text-s2s-gray">
                    Senior Marketing Manager{" "}
                    <span className="block lg:inline">at Trend Micro</span>
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="absolute bottom-1 lg:bottom-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  href="#slide4"
                  title="left arrow"
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
                  href="#slide6"
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
          {/* SLIDE 6 */}
          <div
            id="slide6"
            className="carousel-item relative w-full bg-white m-6 rounded-xl"
          >
            <div className="p-3 lg:p-5 grid grid-cols-10 gap-3 lg:justify-center lg:items-center">
              {/* IMAGE */}
              <div className="col-span-4 lg:col-span-3 flex justify-center">
                <img
                  src="/img/testimonials/chris.webp"
                  className="object-cover rounded-lg w-96 h-full"
                  alt="customer image"
                />
              </div>
              {/* TEXT */}
              <div className="col-span-6 lg:col-span-7 flex flex-col justify-center text-sm lg:text-2xl lg:p-5">
                <p className="text-5xl font-semibold text-s2s-purple ">“</p>

                <p className=" text-s2s-gray">
                  Stone2stone have a great team in place, a fab creative outlook
                  and are brilliantly responsive.
                  <span className="text-black">
                    {" "}
                    They are always a pleasure to work with and I will continue
                    to recommend them to anybody looking for a B2B Marketing
                    Agency.{" "}
                  </span>
                </p>

                <div>
                  <p className="mt-6">Chris Hepple,</p>
                  <p className="text-s2s-gray">
                    Int Marketing Director{" "}
                    <span className="block lg:inline">at Forescout</span>
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="absolute bottom-1 lg:bottom-5 right-5 flex items-center justify-around gap-5 lg:gap-0 lg:justify-start">
                <a
                  href="#slide5"
                  title="left arrow"
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
                  href="#slide1"
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
        </div>
      </div>
    </>
  );
}
