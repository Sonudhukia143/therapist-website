'use client';
import Lottie from "lottie-react";
import Details from "../components/Details";
import Map from "../components/Map";
import Location from "../../public/animation/location.json";
import Link from "next/link";

export default function Locations() {
    return (
        <section className="min-h-screen bg-white-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 text-white-100 px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">Find Us Easily</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        We’re located at the heart of the city, with easy access and a beautiful office.
                        Here’s where you can find us on the map!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 md:order-1 xlg:order-1 rounded-xl overflow-hidden shadow-lg">
                        <Map />
                    </div>

                    <div className="flex order-1 lg:order-2 md:order-2 xlg:order-2 justify-center">
                        <Lottie
                            animationData={Location}
                            loop
                            className="w-72 h-72 md:w-96 md:h-96 drop-shadow-lg"
                        />
                    </div>
                </div>

                <div className="mt-16">
                    <Details />
                </div>

                <div className="text-center mt-20">
                    <h3 className="text-2xl font-semibold mb-4">Want to talk to us directly?</h3>
                    <Link
                        aria-label="link to contact page"
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
