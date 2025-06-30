'use client'
import Lottie from "lottie-react";
import meditation from "../../public/animation/meditation.json";

export default function QuoteSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 bg-gradient-to-r from-[#fefcea] to-[#f1daff]">
            <div className="md:w-1/2 w-full flex justify-center">
                <Lottie animationData={meditation} loop className="w-60 h-60" />
            </div>

            <div className="font-cursive md:w-1/2 w-full text-center md:text-left">
                <p className="text-3xl md:text-3xl font-medium text-gray-800 italic leading-relaxed">
                    “You don’t have to control your thoughts. You just have to stop letting them control you.”
                </p>
                <p className="mt-4 text-gray-600 text-2xl">— Dan Millman</p>
            </div>
        </section>
    );
}
