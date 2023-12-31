import "./globals.css";
import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieBanner";

const gantari = Gantari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stone2Stone",
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
          <CookieConsentBanner />
        </main>
      </body>
    </html>
  );
}
