import Link from "next/link";
import Image from "next/image";
import left from "public/img/hero/left.webp";
import mid from "public/img/hero/mid.webp";
import right from "public/img/hero/right.webp";

export default function Hero() {
  return (
    <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mix-blend-overlay absolute bottom-0 opacity-50 -z-10"
        fill="none"
        viewBox="0 0 1920 1080"
        stroke="#ffffff"
        strokeWidth="100"
      >
        <path
          className="line1"
          d="M-41.1,834.4c0,0,1338.1,500.1,1284.9-896.5"
        />
        <path
          className="line2"
          d="M1050.6,685.4c0,0,131.4-127,173.3,41.6c41.9,168.6,23.9,275.3,122.7,278.3c198,12.6,129.8-695.5,247.4-710.3
            c65.8-4,94.8,328.2,101.8,363.1c7,34.9,43.9,160.6,103.8,160.6c59.9,0,71.8-79.8,83.8-186.6s-21-213.6,76.8-337.2"
        />
      </svg>

      <div className="text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24">
          Losing leads through outdated B2B technology marketing?
        </h1>
        <p className="mt-3 lg:mt-5 px-8 lg:px-60 text-sm leading-none lg:text-lg">
          Stop recycling traditional white papers and hosting mundane
          roundtables. By using Stone2stone you can generate leads, push
          boundaries, unleash dynamic potential, and forge meaningful
          connections that elevate your brand above the competition.
        </p>
        <Link
          href="/"
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
