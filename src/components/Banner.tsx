"use client";

import { usePathname } from "next/navigation";

export default function Banner() {
  const pathname = usePathname();

  // Only show banner on home page
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="bg-white text-orange-600 py-2 overflow-hidden relative z-40 border-b border-orange-200">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm md:text-base font-semibold px-4">
          🎉 INFACTO 4.0 is right at the corner! Be ready to witness Orator's
          first impactful and most successful event! 🎉
        </span>
        <span className="text-sm md:text-base font-semibold px-4">
          🎉 INFACTO 4.0 is right at the corner! Be ready to witness Orator's
          first impactful and most successful event! 🎉
        </span>
        <span className="text-sm md:text-base font-semibold px-4">
          🎉 INFACTO 4.0 is right at the corner! Be ready to witness Orator's
          first impactful and most successful event! 🎉
        </span>
      </div>
    </div>
  );
}
