import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jost = Jost({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const galber = localFont({
  src: "../../public/Galber.otf",
  variable: "--font-galber",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orator - IIIT Nagpur Debate Club",
  description:
    "The premier debate and public speaking club of IIIT Nagpur. Where words meet wisdom and voices find their power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.variable} ${jost.variable} ${galber.variable} font-sans antialiased`}
      >
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
