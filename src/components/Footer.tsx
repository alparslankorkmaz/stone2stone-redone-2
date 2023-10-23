import Image from "next/image";
import Link from "next/link";
import logo from "public/img/logo/logo.png";
import linkedin from "public/img/footer/linkedin.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-footer_bg bg-cover bg-no-repeat bg-top">
        <div className="lg:max-w-7xl mx-auto flex flex-wrap justify-between p-10 lg:px-0 lg:py-44">
          {/* LOGO */}
          <div className="my-10 lg:my-0">
            <Link href="/">
              <Image
                src={logo}
                alt="stone2stone logo"
                width={250}
                height={44}
              />
            </Link>
          </div>
          {/* QUICK LINKS */}
          <div className="flex gap-16 lg:gap-44 lg:mr-16">
            <div>
              <h6 className="font-semibold text-white lg:text-3xl mb-4">
                Quick Links
              </h6>
              <ul className="flex flex-col text-footer-gray text-sm lg:text-xl">
                <li>
                  <Link href="/who-we-are">Who we are</Link>
                </li>
                <li>
                  <Link href="/what-we-do">What we do</Link>
                </li>
                <li>
                  <Link href="/case-studies">Work</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact us</Link>
                </li>
                {/* <li>
                  <Link href="/">Log in</Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-white lg:text-3xl mb-4">
                Company
              </h6>
              <ul className="flex flex-col text-footer-gray text-sm lg:text-xl">
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-full flex justify-between my-10 lg:my-0 items-center">
            <div className="text-footer-gray">
              Copyright @ Stone2Stone {new Date().getFullYear()}
            </div>
            <div className="">
              <Link
                href="https://www.linkedin.com/company/stone2stone/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  width={38}
                  height={38}
                  alt="linkedin"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
