import ClientMarquee from "@/components/ClientMarquee";
import SccQuiz from "@/components/case-studies/SccQuiz";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCC Phillips Product Quiz",
  description:
    "A fully interactive, user controlled online quiz based on a series of lifestyle questions to match the user with the Philips screen best suited to them.",
};

export default function page() {
  return (
    <>
      <SccQuiz />
      <ClientMarquee />
    </>
  );
}
