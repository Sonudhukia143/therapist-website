'use client'

import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
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
            <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center" id="tetimonails">
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
    )
}