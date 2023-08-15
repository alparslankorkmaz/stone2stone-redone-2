import strategy from "public/img/accordion/strategy.webp";
import digital from "public/img/accordion/digital.webp";
import abm from "public/img/accordion/abm.webp";
import content from "public/img/accordion/content.webp";
import gamification from "public/img/accordion/gamification.webp";
import divider from "public/img/misc/divider.webp";

import Link from "next/link";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <>
      <div className="p-5 lg:px-20">
        <div className="text-2xl lg:text-5xl font-semibold my-14">
          <h3 className="text-black">
            {" "}
            What we do:{" "}
            <span className="block text-s2s-gray">
              Lead Generation in B2B Technology Marketing
            </span>
          </h3>
        </div>
        <div className="flex flex-col lg:gap-7">
          <div className="collapse collapse-arrow rounded-lg bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl lg:text-4xl p-7 font-medium">
              Strategy, Branding{" "}
              <span className="block lg:inline"> and Proposition</span>
            </div>
            <div className="collapse-content ">
              {/* DIVIDER */}
              <div className="flex justify-center">
                <Image src={divider} height={0} width={1086} alt="divider" />
              </div>
              <div className="grid grid-cols-5 p-5 gap-5 lg:gap-14 justify-center">
                {/* TEXT */}
                <div className="col-span-5 lg:col-span-3 text-s2s-gray lg:text-xl">
                  <p className="my-5 lg:my-8">
                    Struggling to elevate your brand and drive success? Your
                    strategic approach must combine meticulous market analysis,
                    customer insights, and competitor research to craft a
                    tailored plan for your brand's growth.{" "}
                    <span className="text-black">
                      {" "}
                      It’s understanding that branding is more than just a logo;
                      it's about creating a distinct identity that resonates
                      with your target audience.{" "}
                    </span>
                  </p>
                  <p>
                    Collaborate with Stone2stone to develop a compelling brand
                    story and visuals that capture the essence of your business.
                  </p>
                  <Link href="/">
                    <div className="text-white w-fit mt-10 lg:mt-24 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange">
                      Book a meeting with our Brand Growth team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="col-span-5 lg:col-span-2 flex justify-center order-first lg:order-none">
                  <Image
                    src={strategy}
                    width={361}
                    height={471}
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
