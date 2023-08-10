import Link from "next/link";
import Image from "next/image";
import left from "public/hero/left.webp";
import mid from "public/hero/mid.webp";
import right from "public/hero/right.webp";

export default function Hero() {
  return (
    <div className="bg-hero_bg bg-cover bg-center bg-no-repeat">
      <div className="text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24">
          Losing leads through outdated B2B technology marketing?
        </h1>
        <p className="mt-3 px-8 lg:px-60 text-sm leading-none lg:text-lg">
          Stop recycling traditional white papers and hosting mundane
          roundtables. By using Stone2stone you can generate leads, push
          boundaries, unleash dynamic potential, and forge meaningful
          connections that elevate your brand above the competition.
        </p>
        <Link
          href="/"
          className="w-fit mt-8 text-white lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange py-2 px-4 rounded-xl"
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
