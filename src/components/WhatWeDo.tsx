import Link from "next/link";

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
        <div className="flex flex-col gap-5 lg:gap-7">
          {/* ACCORDION 1 */}
          <div className="collapse collapse-arrow rounded-lg bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl lg:text-4xl p-4 lg:p-7 font-medium">
              Strategy, Branding and{" "}
              <span className="block lg:inline"> Proposition</span>
            </div>
            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="w-full h-[2px] my-5"
                alt="divider"
              />

              <div className="grid grid-cols-5 lg:p-5 gap-5 lg:gap-14 justify-center">
                {/* TEXT */}
                <div className="col-span-5 lg:col-span-3 text-s2s-gray lg:text-xl font-medium">
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
                    Collaborate with Stone2stone to develop a compelling brand
                    story and visuals that capture the essence of your business.
                  </p>
                  {/* BUTTON */}
                  <Link href="/">
                    <div className="text-white w-fit mt-10 lg:mt-20 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange">
                      Book a meeting with our Brand Growth team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="col-span-5 lg:col-span-2 flex justify-center items-center order-first lg:order-none">
                  <img
                    src="/img/accordion/strategy.webp"
                    className="w-full h-52 lg:h-[28rem] object-top object-cover rounded-xl"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 2 */}
          <div className="collapse collapse-arrow rounded-lg bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl lg:text-4xl p-4 lg:p-7 font-medium">
              Digital Marketing
            </div>
            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="w-full h-[2px] my-5"
                alt="divider"
              />

              <div className="grid grid-cols-5 lg:p-5 gap-5 lg:gap-14 justify-center">
                {/* TEXT */}
                <div className="col-span-5 lg:col-span-3 text-s2s-gray lg:text-xl font-medium">
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
                  <Link href="/">
                    <div className="text-white w-fit mt-10 lg:mt-20 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange">
                      Book a meeting with our Digital team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="col-span-5 lg:col-span-2 flex justify-center items-center order-first lg:order-none">
                  <img
                    src="/img/accordion/digital.webp"
                    className="w-full h-52 lg:h-[28rem]  object-cover rounded-xl"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 3 */}
          <div className="collapse collapse-arrow rounded-lg bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl lg:text-4xl p-4 lg:p-7 font-medium">
              ABM
            </div>
            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="w-full h-[2px] my-5"
                alt="divider"
              />

              <div className="grid grid-cols-5 lg:p-5 gap-5 lg:gap-14 justify-center">
                {/* TEXT */}
                <div className="col-span-5 lg:col-span-3 text-s2s-gray lg:text-xl font-medium">
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
                  <Link href="/">
                    <div className="text-white w-fit mt-10 lg:mt-20 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange">
                      Book a meeting with our ABM team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="col-span-5 lg:col-span-2 flex justify-center items-center order-first lg:order-none">
                  <img
                    src="/img/accordion/abm.webp"
                    className="w-full h-52 lg:h-[28rem] object-cover rounded-xl"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 4 */}
          <div className="collapse collapse-arrow rounded-lg bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl lg:text-4xl p-4 lg:p-7 font-medium">
              Content Marketing
            </div>
            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="w-full h-[2px] my-5"
                alt="divider"
              />

              <div className="grid grid-cols-5 lg:p-5 gap-5 lg:gap-14 justify-center">
                {/* TEXT */}
                <div className="col-span-5 lg:col-span-3 text-s2s-gray lg:text-xl font-medium">
                  <p className="my-5 lg:my-10">
                    <span className="text-black">
                      Do you want to drive brand awareness, engagement, and
                      customer loyalty?{" "}
                    </span>
                    Do you understand that compelling and valuable content is
                    the cornerstone of any successful digital strategy? By using
                    Stone2stone you have{" "}
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
                  <Link href="/">
                    <div className="text-white w-fit mt-10 lg:mt-20 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange">
                      Book a meeting with our Content team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="col-span-5 lg:col-span-2 flex justify-center items-center order-first lg:order-none">
                  <img
                    src="/img/accordion/content.webp"
                    className="w-full h-52 lg:h-[28rem] object-cover rounded-xl"
                    alt="man in a meeting"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ACCORDION 5 */}
          <div className="collapse collapse-arrow rounded-lg bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl lg:text-4xl p-4 lg:p-7 font-medium">
              Gamification
            </div>
            <div className="collapse-content ">
              {/* DIVIDER */}
              <img
                src="/img/misc/divider.webp"
                className="w-full h-[2px] my-5"
                alt="divider"
              />

              <div className="grid grid-cols-5 lg:p-5 gap-5 lg:gap-14 justify-center">
                {/* TEXT */}
                <div className="col-span-5 lg:col-span-3 text-s2s-gray lg:text-xl font-medium">
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
                  <Link href="/">
                    <div className="text-white w-fit mt-10 lg:mt-20 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange">
                      Book a meeting with our Gamification team
                    </div>
                  </Link>
                </div>
                {/* IMAGE */}
                <div className="col-span-5 lg:col-span-2 flex justify-center items-center order-first lg:order-none">
                  <img
                    src="/img/accordion/gamification.webp"
                    className="w-full h-52 lg:h-[28rem] object-top object-cover rounded-xl"
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
