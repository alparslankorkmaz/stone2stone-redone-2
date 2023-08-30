import Posts from "@/components/Posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom min-h-screen text-white">
        <Posts />
      </div>
    </>
  );
}
