import ClientMarquee from "@/components/ClientMarquee";
import Form from "@/components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "If you have any questions, feedback, or inquiries about Stone2Stone, please feel free to contact us. We are here to assist you and provide the information you need.",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:px-0 lg:py-16 w-full lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl mb-5 font-semibold">
              Contact us
            </h1>
            <p className="lg:text-2xl">
              <span className="block">Servicing the B2B market through</span>{" "}
              lead generation that delivers
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center">
            <div className="w-full overflow-hidden h-[300px] rounded-xl">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1Jsa2cWt6YSYoVV_oBOLxtmHTVdXOq3Q&ehbc=2E312F"
                width="100%"
                height="600"
                className="border-0 mt-[-150px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* FORM SECTION */}
      <div className="lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-5 p-5 lg:px-0 lg:my-10 gap-10">
          <div className="col-span-5 lg:col-span-2 flex flex-col gap-20">
            <div>
              <h3 className="font-semibold text-2xl lg:text-5xl mb-4">
                Our Office
              </h3>
              <address className="not-italic text-xl">
                Stone2Stone Ltd, <br /> Marvan Court, <br /> 1 Waldegrave Road,{" "}
                <br />
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
