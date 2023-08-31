import ClientMarquee from "@/components/ClientMarquee";
import SccQuiz from "@/components/case-studies/SccQuiz";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCC Phillips Product Quiz",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <SccQuiz />
      <ClientMarquee />
    </>
  );
}
