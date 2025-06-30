"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import animation from "../../public/animation/Animation - 1751182510674.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="bg-[#b5dbdf] p-10 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            width={300}
            height={300}
            src="/favicon_io/android-chrome-512x512.png"
            alt="Dr. Serena Blake"
            className="rounded-lg border-8 border-white shadow-md"
          />
          <p className="font-medium text-gray-700">
            ⭐ <strong className="text-black">Top Rated</strong> |{" "}
            <strong className="text-black">8+ Years Experience</strong> | {" "}
            <strong className="text-black">500+ client sessions</strong>
          </p>
          <Lottie animationData={animation} loop className="w-60 h-60" />
        </div>

        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold">Hi, I&apos;m Dr. Serena Blake</h2>
          <p className="text-xl font-semibold">Clinical Psychologist (PsyD)</p>

          <p className="leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            <strong>Los Angeles, CA, </strong>with eight years of experience and over <strong>500 client sessions</strong>.
            She blends evidence-based approaches—like cognitive-behavioral therapy and
            mindfulness—with compassionate, personalized care to help you overcome anxiety,
            strengthen relationships, and heal from trauma. Whether you meet in her Maplewood
            Drive office or connect <strong>virtually via Zoom</strong>, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4" id="media">
            <div className="p-4 bg-white rounded shadow">
              <div className="p-6 bg-white rounded-xl shadow-md w-full">
                <p className="font-bold text-lg text-[#1f3b3a] mb-2">🏆 Featured In</p>
                <p className="text-sm text-gray-600 mb-4">Mindful Living Magazine, Psychology Daily & More</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Image
                    src="/serviceimages/tech.webp"
                    width={300}
                    height={200}
                    alt="Tech Feature 1"
                    className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="/serviceimages/tech2.png"
                    width={300}
                    height={200}
                    alt="Tech Feature 2"
                    className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="/serviceimages/tech3.png"
                    width={300}
                    height={200}
                    alt="Tech Feature 3"
                    className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
