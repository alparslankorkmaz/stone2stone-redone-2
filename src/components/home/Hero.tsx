import Link from "next/link";
import Image from "next/image";
import left from "public/img/hero/left.webp";
import mid from "public/img/hero/mid.webp";
import right from "public/img/hero/right.webp";
import dynamic from "next/dynamic";

const AnimSvg = dynamic(() => import("./AnimSvg"));

export default function Hero() {
  return (
    <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat z-10">
      <AnimSvg />
      <div className="lg:max-w-7xl mx-auto text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24">
          Losing leads through outdated B2B technology marketing?
        </h1>
        <p className="mt-3 lg:mt-5 px-8 lg:px-20 text-sm leading-none lg:text-2xl">
          Stop recycling traditional white papers, webinars and case studies. By
          using Stone2stone you can generate leads, push boundaries, unleash
          dynamic potential, and forge meaningful connections that elevate your
          brand above the competition.{" "}
        </p>
        <Link
          href="/contact-us"
          className="w-fit mt-8 text-white lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-4 rounded-xl"
        >
          Unleash your potential
        </Link>
        <div className="flex justify-center items-end">
          <div>
            <Image src={left} width={207} height={327} alt="phone" />
          </div>
          <div>
            <Image src={mid} width={376} height={210} alt="laptop" />
          </div>
          <div>
            <Image src={right} width={207} height={327} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}
