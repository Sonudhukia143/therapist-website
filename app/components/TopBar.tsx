"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-blue-50 text-blue-800 text-sm px-4 py-2 transition-all duration-300 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"} sticky top-0 z-40 border-b-1 border-black`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
        <p className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          <a href="tel:+(323) 555-0192" className="hover:underline">
            📞 (323) 555-0192
          </a>
        </p>
        {/* ✨ Truncate long address only on small screens */}
        <p className="text-right overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px] sm:max-w-full hover:underline cursor-pointer">
          <Link href="/locations"
          aria-label="link to location page"
          >
                    📍1287 Maplewood Drive, Los Angeles, CA

          </Link>
        </p>
      </div>
    </div>
  );
}
