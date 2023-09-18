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
          An agency that actually understands your business?
        </h1>
        <h2 className="mt-3 lg:mt-5 px-8 lg:px-20 text-sm leading-none lg:text-2xl">
          We do. We’ve been generating leads, pushing boundaries and helping our
          IT and security clients forge meaningful connections for years.
        </h2>
        <h2 className="mt-3 lg:mt-5 px-8 lg:px-24 text-sm leading-none lg:text-lg">
          And that’s not by recycling traditional white papers, webinars and
          case studies. Ask us how we’d do it for you, then watch us drive new
          business and elevate your brand above the competition.
        </h2>
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
