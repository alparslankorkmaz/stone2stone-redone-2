import Link from "next/link";

export default function WhatWeDo() {
  return (
    <>
      <div className="mx-auto p-5 lg:max-w-7xl lg:p-0">
        <div className="my-14 text-2xl font-semibold lg:text-5xl lg:leading-tight">
          <h3 className="text-black">
            What we do:{" "}
            <span className="block text-s2s-gray">
              Lead Generation in B2B Technology Marketing
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-5 lg:gap-7">
          {/* ACCORDION 1 */}
          <div className="collapse collapse-arrow rounded-lg bg-white">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title relative p-4 text-xl font-medium lg:p-7 lg:text-4xl">
              Strategy, Branding and{" "}
              <span className="block lg:inline"> Proposition</span>
            </div>
            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="my-5 h-[2px] w-full"
                alt="divider"
              />

              <div className="grid grid-cols-5 justify-center gap-5 lg:gap-14 lg:p-5">
                {/* TEXT */}
                <div className="col-span-5 font-medium text-s2s-gray lg:col-span-3 lg:text-xl">
                  <p className="my-5 lg:my-10">
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
                    Collaborate with Stone2Stone to develop a compelling brand
                    story and visuals that capture the essence of your business.
                  </p>
                  {/* BUTTON */}
                  <Link href="/contact-us">
                    <div className="mt-10 w-fit rounded-lg bg-s2s-purple p-3 text-white duration-200 hover:bg-s2s-orange lg:mt-20">
                      Book a meeting with our Brand Growth team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="order-first col-span-5 flex items-center justify-center lg:order-none lg:col-span-2">
                  <img
                    src="/img/accordion/strategy.webp"
                    className="h-52 w-full rounded-xl object-cover object-top lg:h-[28rem]"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 2 */}
          <div className="collapse-arrow collapse rounded-lg bg-white">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title p-4 text-xl font-medium lg:p-7 lg:text-4xl">
              Digital Marketing
            </div>

            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="my-5 h-[2px] w-full"
                alt="divider"
              />

              <div className="grid grid-cols-5 justify-center gap-5 lg:gap-14 lg:p-5">
                {/* TEXT */}
                <div className="col-span-5 font-medium text-s2s-gray lg:col-span-3 lg:text-xl">
                  <p className="my-5 lg:my-10">
                    <span className="text-black">
                      {" "}
                      Do you work hard at delivering cutting-edge digital
                      marketing solutions that should propel your business to
                      new heights in the online landscape but you’re struggling
                      to get the results?{" "}
                    </span>
                    You need a team of skilled digital marketers that leverage
                    the latest trends, tools, and technologies to create a
                    comprehensive strategy tailored to your specific objectives.
                  </p>
                  <p>
                    From search engine optimisation (SEO) and pay-per-click
                    (PPC) advertising to social media management and email
                    marketing,{" "}
                    <span className="text-black">
                      {" "}
                      you can ensure that your brand will gain maximum
                      visibility and engagement across all your digital
                      platforms.{" "}
                    </span>
                  </p>
                  {/* BUTTON */}
                  <Link href="/contact-us">
                    <div className="mt-10 w-fit rounded-lg bg-s2s-purple p-3 text-white duration-200 hover:bg-s2s-orange lg:mt-20">
                      Book a meeting with our Digital team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="order-first col-span-5 flex items-center justify-center lg:order-none lg:col-span-2">
                  <img
                    src="/img/accordion/digital.webp"
                    className="h-52 w-full rounded-xl object-cover lg:h-[28rem]"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 3 */}
          <div className="collapse-arrow collapse rounded-lg bg-white">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title p-4 text-xl font-medium lg:p-7 lg:text-4xl">
              ABM
            </div>

            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="my-5 h-[2px] w-full"
                alt="divider"
              />

              <div className="grid grid-cols-5 justify-center gap-5 lg:gap-14 lg:p-5">
                {/* TEXT */}
                <div className="col-span-5 font-medium text-s2s-gray lg:col-span-3 lg:text-xl">
                  <p className="my-5 lg:my-10">
                    Are you struggling to effectively target and engage chosen
                    accounts?{" "}
                    <span className="text-black">
                      {" "}
                      With ABM you can focus on personalised and tailored
                      marketing efforts that are directed at specific key
                      accounts or a few target companies.{" "}
                    </span>
                    Get a specialist that collaborates closely with your team to
                    identify the most valuable accounts and create bespoke
                    marketing campaigns that resonate with their unique needs
                    and challenges.
                  </p>
                  <p>
                    Start crafting personalised content and messages that are
                    implemented across multi-channel outreach strategies and
                    <span className="text-black">
                      ensure a comprehensive ABM approach that nurtures
                      relationships and drives conversions.{" "}
                    </span>
                  </p>
                  {/* BUTTON */}
                  <Link href="/contact-us">
                    <div className="mt-10 w-fit rounded-lg bg-s2s-purple p-3 text-white duration-200 hover:bg-s2s-orange lg:mt-20">
                      Book a meeting with our ABM team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="order-first col-span-5 flex items-center justify-center lg:order-none lg:col-span-2">
                  <img
                    src="/img/accordion/abm.webp"
                    className="h-52 w-full rounded-xl object-cover lg:h-[28rem]"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 4 */}
          <div className="collapse-arrow collapse rounded-lg bg-white">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title p-4 text-xl font-medium lg:p-7 lg:text-4xl">
              Content Marketing
            </div>

            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="my-5 h-[2px] w-full"
                alt="divider"
              />

              <div className="grid grid-cols-5 justify-center gap-5 lg:gap-14 lg:p-5">
                {/* TEXT */}
                <div className="col-span-5 font-medium text-s2s-gray lg:col-span-3 lg:text-xl">
                  <p className="my-5 lg:my-10">
                    <span className="text-black">
                      Do you want to drive brand awareness, engagement, and
                      customer loyalty?{" "}
                    </span>
                    Do you understand that compelling and valuable content is
                    the cornerstone of any successful digital strategy? By using
                    Stone2Stone you have{" "}
                    <span className="text-black">
                      access to talented content creators and strategists who
                      craft high-quality, relevant, and shareable content that
                      resonates with your target audience.{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Use informative blog posts and engaging social media content
                    to visually appealing infographics and captivating videos,
                    to{" "}
                    <span className="text-black">
                      tailor your content to align seamlessly with your brand's
                      message and values.{" "}
                    </span>
                  </p>
                  {/* BUTTON */}
                  <Link href="/contact-us">
                    <div className="mt-10 w-fit rounded-lg bg-s2s-purple p-3 text-white duration-200 hover:bg-s2s-orange lg:mt-20">
                      Book a meeting with our Content team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="order-first col-span-5 flex items-center justify-center lg:order-none lg:col-span-2">
                  <img
                    src="/img/accordion/content.webp"
                    className="h-52 w-full rounded-xl object-cover lg:h-[28rem]"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 5 */}
          <div className="collapse-arrow collapse rounded-lg bg-white">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title p-4 text-xl font-medium lg:p-7 lg:text-4xl">
              Gamification
            </div>

            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="my-5 h-[2px] w-full"
                alt="divider"
              />

              <div className="grid grid-cols-5 justify-center gap-5 lg:gap-14 lg:p-5">
                {/* TEXT */}
                <div className="col-span-5 font-medium text-s2s-gray lg:col-span-3 lg:text-xl">
                  <p className="my-5 lg:my-10">
                    Do you want to create captivating and interactive
                    experiences that captivate your target audience? From
                    loyalty programs and contests to interactive quizzes and
                    challenges,{" "}
                    <span className="text-black">
                      if you leverage the inherent human desire for competition,
                      achievement, and rewards, a gamification service can
                      unlock new avenues for your customer interaction,
                    </span>{" "}
                    allowing you to foster deeper connections and create
                    longer-lasting brand loyalty.
                  </p>
                  <p>
                    By grasping this powerful strategy you can enhance user
                    participation and motivation, propelling your brand beyond
                    traditional marketing approaches.{" "}
                    <span className="text-black">
                      {" "}
                      Create memorable experiences that inspire and retain
                      customers, and ultimately, driving business growth.{" "}
                    </span>
                  </p>
                  {/* BUTTON */}
                  <Link href="/contact-us">
                    <div className="mt-10 w-fit rounded-lg bg-s2s-purple p-3 text-white duration-200 hover:bg-s2s-orange lg:mt-20">
                      Book a meeting with our Gamification team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="order-first col-span-5 flex items-center justify-center lg:order-none lg:col-span-2">
                  <img
                    src="/img/accordion/gamification.webp"
                    className="h-52 w-full rounded-xl object-cover object-top lg:h-[28rem]"
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
