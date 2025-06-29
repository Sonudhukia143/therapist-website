'use client'
import styles from "../styles/Hero.module.css";
import { useState, useEffect } from "react";
import StatsSection from "./StatsSection";

const rotatingTexts = [
    "🕊️ Greater Peace in Your Heart",
    "⏳ Greater Purpose in Your Life Direction",
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.backgroundImg}>
                <p className="text-lg font-medium mb-2">Dr. Serena Blake&apos;s Counselling Services</p>

                <h1 className="text-4xl font-extrabold mb-4">
                    Professional Counseling for Healing and Growth
                </h1>

                <p className="text-base max-w-xl mx-auto mb-4 px-4">
                    Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
                </p>

                <h5 className="text-lg font-semibold mt-4 mb-2">I want to work with you for...</h5>

                <div className="h-[2.5rem] overflow-hidden m-2">
                    <div
                        className="transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateY(-${index * 2.5}rem)` }}
                    >
                        {rotatingTexts.map((text, i) => (
                            <p key={i} className="text-xl font-semibold font-medium h-[2.5rem]" style={{ color: "skyblue" }}>
                                {text}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="text-sm w-100% mx-auto p-4">
                    <ul className="flex flex-wrap list-disc gap-x-6 gap-y-2 mx-auto align-center justify-center">
                        <span className="font-semibold">⭐ Top Rated</span>
                        <li className="underline cursor-pointer">8 years practice, 500+ sessions</li>
                        <li className="underline cursor-pointer">Testimonials</li>
                        <li className="underline cursor-pointer">Media Mentions</li>
                    </ul>
                </div>

                <div className="mx-auto mt-4 p-2 text-center">
                    <button className="bg-white text-black font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg">
                        ✨ Start Healing Today
                    </button>
                </div>
            </div>
            <StatsSection />
        </>
    );
}
