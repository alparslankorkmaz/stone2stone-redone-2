import ClientMarquee from "@/components/ClientMarquee";
import Form from "@/components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:px-0 lg:py-16 w-full lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Contact us
            </h1>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center">
            <div className="lg:h-[30rem] lg:w-[30rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.70641797858!2d-0.33682782398312505!3d51.42681941658754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b3d9f75c905%3A0xe8bcda5f337c087d!2sStone2Stone%3A%20A%20B2B%20Marketing%20Agency!5e0!3m2!1sen!2suk!4v1693558737331!5m2!1sen!2suk"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* FORM SECTION */}
      <div className="lg:max-w-7xl mx-auto">
        <div className="p-5 lg:px-0 lg:my-10 flex justify-between items-center text-2xl lg:text-5xl font-semibold lg:leading-tight">
          <h2 className="text-black w-4/5">
            <span className="text-s2s-gray">
              Servicing the B2B market through
            </span>{" "}
            lead generation that delivers
          </h2>
        </div>
        <div className="grid grid-cols-5 p-5 lg:px-0 lg:my-10 gap-10">
          <div className="col-span-5 lg:col-span-2 flex flex-col gap-20">
            <div>
              <h3 className="font-semibold text-2xl lg:text-5xl mb-4">
                Our Office
              </h3>
              <address className="not-italic text-xl">
                Stone2Stone Ltd, <br /> Block B, <br /> Marvan Court, <br /> 1
                Waldegrave Road, <br />
                Teddington, TW11 8LZ
              </address>
            </div>
            <div>
              <h3 className="font-semibold text-2xl lg:text-5xl mb-4">Email</h3>
              <p className="text-xl">info@stone2stone.co.uk</p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl lg:text-5xl mb-4">
                Let's talk
              </h3>
              <p className="text-xl underline">+44(0)203 4689 945</p>
            </div>
          </div>
          {/* FORM */}
          <div className="col-span-5 lg:col-span-3 order-first lg:order-none">
            <Form />
          </div>
        </div>
      </div>
      <ClientMarquee />
    </>
  );
}
