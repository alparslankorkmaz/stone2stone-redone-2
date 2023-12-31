"use client";
import Image from "next/image";
import logo from "public/img/logo/logo.png";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // rotation chevron
  const [rotateChevron1, setRotateChevron1] = useState(false);
  const handleRotate1 = () => setRotateChevron1(!rotateChevron1);
  const rotate1 = rotateChevron1 ? "rotate(180deg)" : "rotate(0)";
  const [rotateChevron2, setRotateChevron2] = useState(false);
  const handleRotate2 = () => setRotateChevron2(!rotateChevron2);
  const rotate2 = rotateChevron2 ? "rotate(180deg)" : "rotate(0)";

  // close hover menu after click
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      (document.activeElement as HTMLElement)?.blur();
    }
  };
  const pathname = usePathname();

  return (
    <>
      <nav className="absolute left-0 right-0 top-0 z-20 w-full">
        <div className="mx-auto items-center justify-between lg:flex lg:max-w-7xl lg:items-center">
          <div>
            <div className="flex items-center justify-between py-3 lg:block lg:py-10">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src={logo}
                  alt="stone2stone logo"
                  width={170}
                  height={30}
                  className="px-5 lg:px-0"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="px-5 lg:hidden lg:px-0">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center rounded px-3 py-2 text-s2s-orange"
                >
                  <svg
                    className={`h-6 w-6 fill-current ${
                      isOpen ? "hidden" : "block"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                  <svg
                    className={`h-6 w-6 fill-current ${
                      isOpen ? "block" : "hidden"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center p-10 lg:mt-0 lg:block lg:p-0 ${
                isOpen
                  ? "block h-screen rounded-lg bg-mobile_menu_bg bg-cover bg-bottom p-12 lg:h-auto lg:bg-transparent lg:p-0"
                  : "hidden"
              }`}
            >
              <ul className="flex h-full flex-col items-center gap-8 text-xl font-semibold lg:h-auto lg:flex-row lg:items-center lg:gap-7 lg:text-base">
                {/* HOME */}
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={
                      pathname === "/"
                        ? "text-s2s-orange"
                        : "w-fit text-center text-white duration-200 hover:text-s2s-orange lg:mt-0"
                    }
                  >
                    Home
                  </Link>
                </li>
                {/* ABOUT */}
                <li>
                  <div
                    className="dropdown dropdown-end dropdown-bottom dropdown-hover"
                    onMouseEnter={handleRotate1}
                    onMouseLeave={handleRotate1}
                  >
                    <label
                      tabIndex={0}
                      className={
                        pathname === "/about-us" ||
                        pathname === "/who-we-are" ||
                        pathname === "/our-clients"
                          ? "relative flex w-fit items-center justify-center gap-2 text-center text-s2s-orange lg:mt-0"
                          : "relative flex w-fit items-center justify-center gap-2 text-center text-white duration-200 hover:text-s2s-orange lg:mt-0"
                      }
                    >
                      About Stone2Stone{" "}
                      <span className="text-xs">
                        <FaChevronDown
                          style={{
                            transform: rotate1,
                            transition: "all 0.2s linear",
                          }}
                        />
                      </span>
                    </label>
                    <ul
                      tabIndex={0}
                      // style={{ display: displayMenuStyle1 }}
                      className="menu dropdown-content -left-3 z-[1] flex w-52 items-center justify-center divide-y-2 divide-s2s-orange rounded-lg bg-menu-gray p-3 text-white lg:-left-7 lg:block"
                    >
                      <li>
                        <Link
                          href="/about-us"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/who-we-are"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          Who we are
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-clients"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          Our clients
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* WHAT WE DO */}
                <li>
                  <div
                    className="dropdown-hover dropdown-bottom dropdown-end dropdown"
                    onMouseEnter={handleRotate2}
                    onMouseLeave={handleRotate2}
                  >
                    <label
                      tabIndex={0}
                      className={
                        pathname === "/strategy-branding-proposition" ||
                        pathname === "/digital-marketing" ||
                        pathname === "/abm" ||
                        pathname === "/content-marketing" ||
                        pathname === "/gamification" ||
                        pathname === "/what-we-do"
                          ? "relative flex w-fit items-center justify-center gap-2 text-center text-s2s-orange lg:mt-0"
                          : "relative flex  w-fit items-center justify-center gap-2 text-center text-white duration-200 hover:text-s2s-orange lg:mt-0"
                      }
                    >
                      What we do{" "}
                      <span className="text-xs">
                        <FaChevronDown
                          style={{
                            transform: rotate2,
                            transition: "all 0.2s linear",
                          }}
                        />
                      </span>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content -left-[5.3rem] z-[1] flex w-72 items-center justify-center divide-y-2 divide-s2s-orange rounded-lg bg-menu-gray p-3 text-white lg:-left-7 lg:block"
                    >
                      <li>
                        <Link
                          href="/strategy-branding-proposition"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          Strategy, Branding & Proposition
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/digital-marketing"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/abm"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          Account Based Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/content-marketing"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          Content Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/gamification"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          Gamification
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/what-we-do"
                          onClick={() => {
                            setIsOpen(false);
                            handleClick();
                          }}
                          className="hover:text-s2s-orange"
                        >
                          See all{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* WORK */}
                <li>
                  <Link
                    href="/case-studies"
                    onClick={() => setIsOpen(false)}
                    className={
                      pathname === "/case-studies"
                        ? "text-s2s-orange"
                        : "w-fit text-center text-white duration-200 hover:text-s2s-orange lg:mt-0"
                    }
                  >
                    Work
                  </Link>
                </li>
                {/* BLOG */}
                <li>
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className={
                      pathname === "/blog"
                        ? "text-s2s-orange"
                        : "w-fit text-center text-white duration-200 hover:text-s2s-orange lg:mt-0"
                    }
                  >
                    Blog
                  </Link>
                </li>
                {/* CONTACT US */}
                <li>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className={
                      pathname === "/contact-us"
                        ? "text-s2s-orange"
                        : "w-fit text-center text-white duration-200 hover:text-s2s-orange lg:mt-0"
                    }
                  >
                    Contact us
                  </Link>
                </li>
                <li className="hidden text-5xl font-thin text-s2s-purple lg:block">
                  I
                </li>
                <li>
                  <Link
                    className=" w-fit whitespace-nowrap rounded-xl bg-s2s-purple px-10 py-2 text-center font-bold text-white duration-200 hover:bg-s2s-orange lg:mt-0"
                    href="https://www.edventuremarketing.co.uk/"
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                  >
                    EdVenture: Gamification
                  </Link>
                </li>

                {/* LOGIN BUTTON */}
                {/* <li className="hidden lg:block text-s2s-purple text-5xl font-thin">
                  I
                </li> */}
                {/* <li>
                  <Link
                    className=" w-fit font-bold lg:mt-0 text-white text-center bg-s2s-purple px-10 py-2 rounded-xl hover:bg-s2s-orange duration-200"
                    href="/"
                    onClick={() => setIsOpen(false)}
                  >
                    Log in
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
