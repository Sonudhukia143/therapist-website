'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMessage } from "react-icons/fa6";
import Styles from "../styles/Hero.module.css";

export default function PopUpBox() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showTimeOut = setTimeout(() => {
            setIsVisible(true);
        }, 15000);

        const hideTimeOut = setTimeout(() => {
            setIsVisible(false);
        }, 35000);

        return () => {
            clearTimeout(showTimeOut);
            clearTimeout(hideTimeOut);
        }
    }, []);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);


    return (
        <>
            {
                isVisible
                &&
                <div className="fixed inset-0 z-999">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-999"></div>

                    <div
                        className={`fixed left-[50%] top-[50%] z-9999 
        w-[95%] h-[80%] md:w-[95%] md:h-[80%] xlg:w-[80%] 
        xlg:h-[80%] lg:w-[80%] lg:h-[80%] max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white
        text-center rounded-b-[10px] text-black overflow-auto
        `}>

                        <div className={`
                    ${Styles.popUpBar}
                    w-[100%] h-4 mt-[0.5] bg-[#1e4145]
                    `}
                        >
                        </div>

                        <div className="px-4 grid gap-8 py-2">
                            <h1 className="text-3xl font-semibold text-[#1e4145]">Ready to Start You Healing Journey?</h1>

                            <span className="grid sm:grid-cols-1 md:grid-cols-1 xlg:grid-cols-2 lg:grid-cols-2">
                                <span className="flex flex-col items-start mx-auto">
                                    <Image
                                        width={192}
                                        height={192}
                                        src="/favicon_io/android-chrome-192x192.png"
                                        alt="Image of doctor"
                                        className="rounded-[8px]"
                                    >
                                    </Image>
                                    <div className="font-[550] text-x text-[#1e4145]">⭐ Top Rated</div>
                                    <span className="flex items-center">
                                        <Link href="/#about" aria-label="link to about section" className="text-[0.7rem] mr-1 underline font-[550] cursor-pointer inline-block text-[#1e4145]">8 years practice </Link>
                                        •
                                        <Link href="/#media" aria-label="link to media section" className="text-[0.7rem] ml-1 underline font-[550] cursor-pointer inline-block text-[#1e4145]">  Media Mentions</Link>
                                    </span>

                                </span>

                                <p className="text-[#1e4145] mx-auto p-1 m-1"
                                >Take the first step towards spiritual growth, deeper connections, and inner peace in Richmond, VA. Reach out to discuss how Christian counseling can support you.</p>

                            </span>

                            <div className="grid grid-cols-1 xlg:grid-cols-2 lg:grid-cols-2 text-[#1e4145] gap-2">
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-1 border-1 border-green w-[80%] rounded-[4px] cursor-pointer mx-auto">
                                    Close
                                </button>
                                <Link
                                    aria-label="get in touch /contact"
                                    href="/contact"
                                    onClick={() => setIsVisible(false)}
                                    className="p-1 bg-[#1e4145] flex items-center justify-center w-[80%] rounded-[4px] mx-auto text-[#b5dbdf]"
                                >
                                    <FaMessage fill="white" stroke="#b5dbdf" className="inline-block mx-2" /> Get In Touch
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    );
}


