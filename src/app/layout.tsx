import "./globals.css";
import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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
      <head>
        <Script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/c2a13ed0-6e14-4576-874a-11501ad56c00/cd.js"
          type="text/javascript"
          async
        />
      </head>
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
