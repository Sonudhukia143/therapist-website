"use client";
import Image from "next/image";
import ContactForm from "../components/Form";
import Lottie from "lottie-react";
import Telephone from "../../public/animation/Telephone.json";

export default function Contact() {
    return (
        <>
            <div className="w-full min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#e6f4f1] px-4 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* 👩 Doctor Info Section - order: 2 on mobile, 1 on large screens */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image
                        alt="Serena Blake"
                        src="/favicon_io/android-chrome-192x192.png"
                        width={192}
                        height={192}
                        className="border-4 border-[#1f3b3a] rounded-full mb-6 shadow-md"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1f3b3a] mb-4">
                        Hi, I'm Dr. Serena Blake
                    </h1>
                    <h2 className="text-2xl text-gray-700 font-bold mb-3">
                        PsyD & Clinical Psychologist
                    </h2>
                    <p className="text-gray-900 text-lg leading-relaxed max-w-xl">
                        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
                        Los Angeles, CA, with <strong>8+ years of experience</strong> and over
                        500 client sessions. She blends evidence-based approaches—like
                        cognitive-behavioral therapy and mindfulness—with compassionate,
                        personalized care to help you overcome anxiety, strengthen
                        relationships, and heal from trauma. Whether you meet in her
                        Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
                        committed to creating a safe, supportive space for you to thrive.
                    </p>
                </div>

                {/* 📞 Form & Call Section - order: 1 on mobile, 2 on large screens */}
                <div className="order-1 lg:order-2 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1f3b3a] mb-6">
                        📞 Get in Touch
                    </h1>

                    <h2 className="text-xl md:text-2xl text-[#1f3b3a] font-semibold mb-4 animate-pulse">
                        Tap to Call
                    </h2>

                    <a
                        href="tel:+91951880314"
                        className="w-40 hover:scale-105 transition-transform duration-300 mb-6 drop-shadow-lg"
                    >
                        <Lottie animationData={Telephone} loop />
                    </a>

                    <p className="text-lg font-medium text-gray-600 mb-4">OR</p>

                    <div className="w-full max-w-xl bg-white shadow-2xl p-6 rounded-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <div className="w-full bg-white text-center mt-4 px-6 relative overflow-hidden">
                <div className="inline-block bg-yellow-200 text-black text-sm font-medium px-4 py-2 mb-4">
                    Client Success Stories and Testimonials
                </div>
                <h1 className="text-4xl font-bold text-[#1f3b3a] mb-4">
                    What Former Clients Say
                </h1>
                <p className="text- text-gray-800 max-w-xl mx-auto mb-12">
                    Real experiences from individuals who have found healing and growth through our work together.
                </p>

                <div className="relative h-44 lg:h-36 mb-6 text-center mx-auto xlg:w-150 lg:w-150 overflow-hidden">
                    <div className="absolute inset-0 bg-[skyblue] text-[#1f3b3a] rounded-xl shadow-xl p-8 animate-testimonial-1">
                        <p className="italic text-md">
                            “Working with Dr. Blake changed my life. I felt truly heard and supported every step of the way.”
                        </p>
                        <p className="mt-4 font-bold">– Emily R.</p>
                    </div>
                    <div className="absolute inset-0 bg-[skyblue] backdrop-blur-sm text-[#1f3b3a] rounded-xl shadow-md p-8 animate-testimonial-2">
                        <p className="italic text-md">
                            “Her calm presence and evidence-based methods helped me heal in ways I never thought possible.”
                        </p>
                        <p className="mt-4 font-bold">– James D.</p>
                    </div>
                </div>
            </div>


        </>
    );
}
