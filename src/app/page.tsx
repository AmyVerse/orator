"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showCurtain, setShowCurtain] = useState(true);
  const [animateCurtain, setAnimateCurtain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCurtain(true);
      setTimeout(() => setShowCurtain(false), 700);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-gray-700 min-h-screen">
      {showCurtain && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-transform ease-out duration-700 ${
            animateCurtain ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {/* <h1 className="font-[galber] text-[90vw] leading-none">
            ORATOR
          </h1> */}
          <Image className="hidden sm:block" fill priority alt="orator" src={"/orator.svg"} />
          <Image className="max-sm:block sm:hidden" fill priority alt="orator" src={"/oratorsm.svg"} />
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-12 h-[calc(100vh-59px)] items-center justify-center">
          <h1 className="text-3xl font-[jost] text-white">
            Welcome to the Orator
          </h1>
        </div>
        <div className="flex flex-col text-white items-center">
          <p>Powered By-</p>
          <p>Founding Fathers</p>
        </div>
      </div>
    </main>
  );
}
