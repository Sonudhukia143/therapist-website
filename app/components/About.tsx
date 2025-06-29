"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import animation from "../../public/animation/Animation - 1751182510674.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Dr. Blake truly changed my life. She helped me navigate my anxiety with compassion and clarity.",
    name: "– Sarah W.",
  },
  {
    quote:
      "Her sessions are a safe space. I felt heard, understood, and empowered to heal.",
    name: "– Michael D.",
  },
];

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <>
      {/* 🔹 About Section */}
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
            <strong className="text-black">8+ Years Experience</strong>
          </p>
          <Lottie animationData={animation} loop className="w-60 h-60" />
        </div>

        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold">Hi, I&apos;m Dr. Serena Blake</h2>
          <p className="text-xl font-semibold">Clinical Psychologist (PsyD)</p>

          <p className="leading-relaxed">
            I’m a licensed psychologist based in Los Angeles, CA. With over{" "}
            <strong>500 sessions</strong> and <strong>8 years of experience</strong>, I help people
            break through anxiety, rebuild relationships, and recover from trauma using proven
            techniques like <strong>CBT</strong> and <strong>mindfulness</strong>. Whether we meet
            in my cozy Maplewood office or virtually, I offer a warm, safe space for healing and
            growth.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="p-4 bg-white rounded shadow">
              <p className="font-bold">🏆 Featured In</p>
              <p>Mindful Living Magazine</p>
              <p>Psychology Daily</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <p className="font-bold">🌟 Testimonials</p>
              <p>&quot;Truly life-changing sessions!&quot;</p>
              <p>&quot;The best therapist I’ve ever worked with.&quot;</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Testimonial Slider */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          What My Clients Say
        </h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-xl shadow-xl mx-4 relative text-gray-700"
              >
                <FaQuoteLeft className="text-3xl text-blue-400 absolute top-4 left-4" />
                <p className="text-xl font-medium italic leading-relaxed">
                  {item.quote}
                </p>
                <FaQuoteRight className="text-3xl text-blue-400 absolute bottom-4 right-4" />
                <p className="mt-6 font-semibold text-blue-800">{item.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* 🔹 Why Choose Me Section */}
      <div className="bg-[#f0f9ff] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Clients Love Working With Me
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl mb-3">🧠</p>
            <h3 className="text-xl font-semibold">Evidence-Based Therapy</h3>
            <p className="text-sm text-gray-600">
              Techniques like CBT and mindfulness tailored to your unique needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl mb-3">💬</p>
            <h3 className="text-xl font-semibold">Safe & Supportive Space</h3>
            <p className="text-sm text-gray-600">
              Every session is built on empathy, safety, and trust.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl mb-3">🌿</p>
            <h3 className="text-xl font-semibold">Lasting Growth</h3>
            <p className="text-sm text-gray-600">
              Together, we work toward long-term healing and purpose.
            </p>
          </div>
        </div>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
          Schedule Your First Session
        </button>
      </div>
    </>
  );
}
