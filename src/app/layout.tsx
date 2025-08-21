import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Orator",
  description: "Web App for Orator Club | IIITN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${jost.variable} ${galber.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
