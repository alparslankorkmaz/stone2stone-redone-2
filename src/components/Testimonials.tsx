import Image from "next/image";
import test1 from "public/img/testimonials/tes1.webp";

export default function Testimonials() {
  return (
    <>
      <section className="bg-white m-14 rounded-xl">
        <div className="container p-10 lg:p-5">
          <div className="lg:flex lg:items-center lg:justify-around">
            <Image src={test1} width={350} height={350} alt="customer image" />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-s2s-purple ">“</p>

              <p className="text-2xl">
                Having worked with Stone2stone on many projects, we have always
                found that the team possesses the right balance of
                professionalism, knowledge and creativity to suit our needs.
                Stone2stone listens to our briefs, understands the challenges
                and has always created solutions that hit the spot.{" "}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="mt-6 text-lg font-medium">Amisha Shah,</p>
                  <p className="text-s2s-gray">
                    Senior International Marketing at ECI
                  </p>
                </div>

                <div className="flex items-center justify-around gap-5 lg:gap-0 mt-12 lg:justify-start">
                  <button
                    title="left arrow"
                    className="p-2 text-s2s-orange transition-colors duration-300 border border-s2s-orange rounded-full rtl:-scale-x-100 hover:text-white hover:bg-s2s-orange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                  </button>

                  <button
                    title="right arrow"
                    className="p-2 text-s2s-orange transition-colors duration-300 border border-s2s-orange rounded-full rtl:-scale-x-100 lg:mx-6 hover:text-white hover:bg-s2s-orange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
