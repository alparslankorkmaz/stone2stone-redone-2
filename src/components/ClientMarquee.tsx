import Marquee from "react-fast-marquee";

export default function ClientMarquee() {
  return (
    <>
      <div className="grid grid-cols-2 my-8 gap-14 p-5 lg:p-0 lg:max-w-7xl mx-auto">
        <div className="col-span-2 lg:col-span-1 font-semibold text-2xl lg:text-5xl lg:leading-tight">
          <p className="text-s2s-gray">
            <span className="text-black font-semibold">50+ clients </span> who
            are pushing the limits of B2B Lead Generation
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-center items-center">
          <Marquee
            speed={50}
            gradient
            gradientWidth={50}
            gradientColor={[247, 247, 247]}
          >
            <div className="mx-8 flex justify-center items-center w-full h-full">
              <img
                src="/img/clients/checkpoint.svg"
                className="w-44 aspect-3/2"
                alt="client logo"
              />
            </div>
            <div className="mx-8 flex justify-center items-center w-full h-full">
              <img
                src="/img/clients/cynet.svg"
                className="w-28 aspect-3/2"
                alt="client logo"
              />
            </div>
            <div className="mx-8 flex justify-center items-center w-full h-full">
              <img
                src="/img/clients/eci.svg"
                className="w-24 aspect-3/2"
                alt="client logo"
              />
            </div>
            <div className="mx-8 flex justify-center items-center w-full h-full">
              <img
                src="/img/clients/redhat.svg"
                className="w-40 aspect-3/2"
                alt="client logo"
              />
            </div>
            <div className="mx-8 flex justify-center items-center w-full h-full">
              <img
                src="/img/clients/scc.svg"
                className="w-40 aspect-3/2"
                alt="client logo"
              />
            </div>
            <div className="mx-8 flex justify-center items-center w-full h-full">
              <img
                src="/img/clients/stackoverflow.svg"
                className="w-44 aspect-3/2"
                alt="client logo"
              />
            </div>
            <div className="mx-8 flex justify-center items-center w-full h-full">
              <img
                src="/img/clients/trendmicro.svg"
                className="w-40 aspect-3/2"
                alt="client logo"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
