"use client";
import Image from "next/image";
import logo from "public/logo/logo.svg";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full top-0 left-0 right-0 absolute z-10">
        <div className="lg:flex lg:items-center lg:max-w-7xl mx-auto px-4 justify-between items-center">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-10 lg:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src={logo}
                  alt="stone2stone logo"
                  width={170}
                  height={30}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
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
                  ? "p-12 rounded-lg lg:p-0 block bg-s2s-orange lg:bg-transparent"
                  : "hidden"
              }`}
            >
              <ul className="font-semibold lg:h-auto items-end flex flex-col justify-center lg:flex-row lg:items-center text-3xl lg:text-sm lg:gap-7">
                <li className="w-fit text-sm lg:text-base lg:mt-0 text-white text-center lg:hover:text-s2s-orange lg:hover:bg-transparent">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="mt-6 text-sm lg:text-base w-fit lg:mt-0 text-white text-center lg:hover:text-s2s-orange lg:hover:bg-transparent">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Who we are
                  </Link>
                </li>
                <li className="mt-6 text-sm lg:text-base w-fit lg:mt-0 text-white text-center lg:hover:text-s2s-orange lg:hover:bg-transparent">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    What we do
                  </Link>
                </li>
                <li className="mt-6 text-sm lg:text-base w-fit lg:mt-0 text-white text-center lg:hover:text-s2s-orange lg:hover:bg-transparent">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Work
                  </Link>
                </li>
                <li className="mt-6 text-sm lg:text-base w-fit lg:mt-0 text-white text-center lg:hover:text-s2s-orange lg:hover:bg-transparent">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li className="mt-6 text-sm lg:text-base w-fit lg:mt-0 text-white text-center lg:hover:text-s2s-orange lg:hover:bg-transparent lg:border-r-2 lg:pr-6 border-r-s2s-purple">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Contact us
                  </Link>
                </li>

                <Link
                  className="mt-6 text-sm lg:text-base w-fit font-bold lg:mt-0 text-white text-center bg-s2s-purple px-10 py-2 rounded-xl lg:hover:bg-s2s-orange lg:hover:text-white"
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
