"use client";
import Image from "next/image";
import logo from "public/img/logo/logo.png";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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

  return (
    <>
      <nav className="w-full top-0 left-0 right-0 absolute z-20">
        <div className="lg:flex lg:items-center lg:max-w-7xl mx-auto justify-between items-center">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-10 lg:block">
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
              <div className="lg:hidden px-5 lg:px-0">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center px-3 py-2 rounded text-s2s-orange"
                >
                  <svg
                    className={`fill-current h-6 w-6 ${
                      isOpen ? "hidden" : "block"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                  <svg
                    className={`fill-current h-6 w-6 ${
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
              className={`flex-1 justify-self-center p-10 lg:block lg:p-0 lg:mt-0 ${
                isOpen
                  ? "p-12 rounded-lg lg:p-0 block bg-mobile_menu_bg bg-cover bg-bottom lg:bg-transparent h-screen lg:h-auto"
                  : "hidden"
              }`}
            >
              <ul className="gap-8 h-full font-semibold lg:h-auto flex flex-col items-center lg:flex-row lg:items-center text-xl lg:text-base lg:gap-7">
                {/* HOME */}
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="w-fit lg:mt-0 text-white text-center hover:text-s2s-orange duration-200"
                  >
                    Home
                  </Link>
                </li>
                {/* ABOUT */}
                <li>
                  <div
                    className="dropdown dropdown-hover dropdown-bottom dropdown-end"
                    onMouseEnter={handleRotate1}
                    onMouseLeave={handleRotate1}
                  >
                    <label
                      tabIndex={0}
                      className="flex justify-center items-center gap-2 relative w-fit lg:mt-0 text-white text-center hover:text-s2s-orange duration-200"
                    >
                      About Stone2stone{" "}
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
                      className="flex justify-center items-center lg:block dropdown-content -left-3 lg:-left-7 divide-y-2 divide-s2s-orange z-[1] menu p-3 text-white bg-menu-gray rounded-lg w-52"
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
                    className="dropdown dropdown-hover dropdown-bottom dropdown-end"
                    onMouseEnter={handleRotate2}
                    onMouseLeave={handleRotate2}
                  >
                    <label
                      tabIndex={0}
                      className="flex justify-center items-center gap-2 relative w-fit lg:mt-0 text-white text-center hover:text-s2s-orange duration-200"
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
                      className="flex justify-center items-center lg:block dropdown-content -left-[5.3rem] lg:-left-7 divide-y-2 divide-s2s-orange z-[1] menu p-3 text-white bg-menu-gray rounded-lg w-72"
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
                    className="w-fit lg:mt-0 text-white text-center hover:text-s2s-orange duration-200"
                  >
                    Work
                  </Link>
                </li>
                {/* BLOG */}
                <li>
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className="w-fit lg:mt-0 text-white text-center hover:text-s2s-orange duration-200"
                  >
                    Blog
                  </Link>
                </li>
                {/* CONTACT US */}
                <li>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className="w-fit lg:mt-0 text-white text-center hover:text-s2s-orange duration-200"
                  >
                    Contact us
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
