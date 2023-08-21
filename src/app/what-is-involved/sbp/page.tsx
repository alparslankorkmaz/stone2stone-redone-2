import Slider1 from "@/components/what-is-involved/sbp/Slider1";

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat pb-10 lg:min-h-screen">
        <div className="text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24 lg:w-3/5">
            What is involved in a Brand, Strategy and Proposition project?{" "}
          </h1>
          <p className="mt-3 lg:mt-5 px-8 lg:px-60 text-sm leading-none lg:text-lg">
            Here are some common challenges that may arise during a Strategy,
            Branding and Proposition project along with how Stone2stone address
            them{" "}
          </p>
        </div>
      </div>
      {/* CONTENT */}
      <Slider1 />
    </>
  );
}
