import "./globals.css";
import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const gantari = Gantari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stone2stone",
  description: "Lead Generation Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gantari.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
