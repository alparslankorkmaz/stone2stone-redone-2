export default function ProjectHub() {
  return (
    <>
      <div className="p-5 lg:p-0 lg:max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center rounded-2xl p-5 lg:p-8 bg-hub_bg bg-cover bg-no-repeat bg-center text-white text-center">
          <div className="flex flex-col justify-center items-center w-4/5">
            <h5 className="my-5 font-semibold text-2xl lg:text-5xl">
              Real time visibility of your marketing projects with the
              Stone2stone project hub
            </h5>
            <p className="lg:font-medium text-sm lg:text-xl">
              As a client, you get exclusive access to real-time project
              progress, reports, invoice reviews, and the ability to add new
              projects effortlessly. Our dedicated hub keeps you informed at
              every step, while instant meetings ensure effective communication
              and swift decision-making with our expert team.
            </p>
            <div className="w-fit mt-8 text-white lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-4 rounded-xl">
              Coming soon
            </div>
            <img
              src="/img/misc/projecthub.webp"
              alt="project hub illustration"
              className="w-full lg:w-3/4 my-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
