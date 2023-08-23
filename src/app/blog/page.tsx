import Posts from "@/components/Posts";

export default function page() {
  return (
    <>
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom min-h-screen text-white">
        <Posts />
      </div>
    </>
  );
}
