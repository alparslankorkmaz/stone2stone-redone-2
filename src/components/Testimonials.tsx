import Image, { StaticImageData } from "next/image";
import { testimonials } from "@/constant";

type testProps = {
  body: string;
  name: string;
  role: string;
  img: string | StaticImageData;
};

const Testimonial = ({ body, name, role, img }: testProps) => (
  <div>
    <div className="lg:flex lg:items-center lg:justify-around">
      <Image src={img} width={350} height={350} alt="customer image" />

      <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
        <p className="text-5xl font-semibold text-s2s-purple ">“</p>

        <p className="lg:text-2xl">{body}</p>

        <div>
          <p className="mt-6 text-lg font-medium">{name}</p>
          <p className="text-s2s-gray">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="carousel w-[90%] ">
          {/* SLIDE 1 */}
          <div
            id="slide1"
            className="carousel-item relative w-full bg-white m-6 rounded-xl"
          >
            <div className="p-10 lg:p-5 relative">
              <Testimonial
                body={testimonials[0].body}
                name={testimonials[0].name}
                role={testimonials[0].role}
                img={testimonials[0].img}
              />
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
            <div className=" p-10 lg:p-5 relative">
              <Testimonial
                body={testimonials[1].body}
                name={testimonials[1].name}
                role={testimonials[1].role}
                img={testimonials[1].img}
              />
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
            <div className=" p-10 lg:p-5">
              <Testimonial
                body={testimonials[2].body}
                name={testimonials[2].name}
                role={testimonials[2].role}
                img={testimonials[2].img}
              />
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
            <div className=" p-10 lg:p-5">
              <Testimonial
                body={testimonials[3].body}
                name={testimonials[3].name}
                role={testimonials[3].role}
                img={testimonials[3].img}
              />
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
            <div className=" p-10 lg:p-5">
              <Testimonial
                body={testimonials[4].body}
                name={testimonials[4].name}
                role={testimonials[4].role}
                img={testimonials[4].img}
              />
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
            <div className=" p-10 lg:p-5">
              <Testimonial
                body={testimonials[5].body}
                name={testimonials[5].name}
                role={testimonials[5].role}
                img={testimonials[5].img}
              />
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
