import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-white lg:text-5xl font-semibold flex gap-10 flex-col justify-center items-center h-screen bg-hero_bg bg-cover bg-bottom">
      <h2>404: Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="w-fit h-fit mt-5 lg:mt-0 whitespace-nowrap text-white text-base lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-4 rounded-xl"
      >
        Return Home
      </Link>
    </div>
  );
}
