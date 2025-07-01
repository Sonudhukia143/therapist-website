import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f3f6f8] dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* 🏆 Top Rated / Testimonials / Mentions */}
        <div className="space-y-2">
          <p className="text-sm uppercase text-yellow-600 font-semibold tracking-wide">⭐ Top Rated</p>
          <h2 className="text-2xl font-bold text-[#1f3b3a]">Trusted by 500+ clients</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Featured in Mindful Living Magazine, Psychology Daily, and more.</p>
        </div>

        {/* 📍 Location */}
        <div className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-400">
          <FaMapMarkerAlt className="text-red-500 text-xl mb-1" />
          <p className="text-sm font-medium">1287 Maplewood Drive, Los Angeles, CA</p>
          <p className="text-sm">Call: (323) 555-0192</p>
          <a
            href="mailto:serena@blakepsychology.com"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            serena@blakepsychology.com
          </a>
        </div>

        {/* 🖼 Tech Image */}
        <div className="flex justify-center">
          <Image
            src="/serviceimages/tech.webp"
            alt="Featured media"
            width={220}
            height={100}
            className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                        loading="lazy"

          />
        </div>

        {/* 🌎 Areas Served */}
        <div>
          <p className="text-sm uppercase font-semibold tracking-wide text-gray-600 dark:text-gray-400 mb-2">
            Areas Served
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Los Angeles · Santa Monica · Pasadena · Long Beach · Online across California
          </p>
        </div>

        {/* ━ Divider */}
        <hr className="border-gray-300 dark:border-gray-700 my-6" />

        {/* 🔏 Legal */}
        <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <p>&copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.</p>
          <p>
            Site by{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Grow My Therapy
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
