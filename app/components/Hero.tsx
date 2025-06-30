'use client'
import styles from "../styles/Hero.module.css";
import { useState, useEffect } from "react";
import StatsSection from "./StatsSection";
import Link from "next/link";

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
                        <span className="font-bold">⭐ Top Rated</span>
                        <li><Link  href="/#about" className="hover:underline font-semibold cursor-pointer">8 years practice, 500+ sessions</Link></li>
                        <li><Link href="/#testimonials" className="hover:underline font-semibold cursor-pointer">Testimonials</Link></li>
                        <li><Link href="/#media" className="hover:underline font-semibold cursor-pointer">Media Mentions</Link></li>
                    </ul>
                </div>

                <div className="mx-auto mt-4 p-2 text-center">
                    <Link
                        href="/contact"
                        className="bg-white text-black font-semibold py-4 px-6 text-lg transition-all ease-in-out hover:font-bold duration-500 shadow-md hover:rounded-[20px] cursor-pointer hover:shadow-lg hover:text-yellow-900"
                    >
                        ✨ Start Healing Today
                    </Link>

                </div>
            </div>
            <StatsSection />
        </>
    );
}
