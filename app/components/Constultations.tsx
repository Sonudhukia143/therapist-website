import Image from "next/image";
import Box from "./Box";
import Link from "next/link";

export default function Consultations() {
    return (
        <>
            <div className="bg-white p-10">
                <div>
                    <h1 style={{
                        fontSize: "6vh",
                        marginLeft: "-0.9vh",
                        color: "rgb(74, 73, 73"
                    }}
                        className={`font-bold p-2 text-gray-900 mx-auto`}>
                        How I Help
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl mx-auto min-w-full my-6">
                    <Box
                        title="Anxiety & Stress Management"
                        description="Break free from the grip of stress and overwhelm. Through mindfulness and evidence-based strategies, discover a calm and centered version of yourself with us."
                        image="/serviceimages/singlewomenpraying.webp"
                        alt="woman praying"
                    />
                    <Box
                        title="Relationship Counselling & Communication"
                        description="Strengthen communication, rebuild trust, and nurture deeper connection. Whether you're navigating conflict or seeking greater intimacy, support is here."
                        image="/serviceimages/couple.webp"
                        alt="couple"
                    />
                </div>
            </div >
            <Image
                width={414}
                height={552}
                className="absolute -bottom-287 right-0 scale-x-[-1] z-[1] hidden md:flex md:max-h-[250px] md:max-w-[175px] lg:max-h-[300px] lg:max-w-[200px] xl:max-w-[200px] xl:max-h-[300px] xl:right-[5%]"
                src="/serviceimages/plant.webp"
                alt="plantwebp"
                loading="lazy"

            ></Image>

            <div
                style={{ backgroundColor: "rgba(30, 65, 69, 0.9)" }}
                className="w-full px-2 lg:py-20 xl:py-20 py-10 grid gap-6 lg:grid-cols-3 text-center items-center"
            >
                <h1
                    style={{ color: "rgba(177, 225, 231, 0.9)" }}
                    className="text-3xl font-bold"
                >
                    Schedule A Consultation
                </h1>
                <p
                    style={{ color: "rgba(177, 225, 231, 0.9)" }}
                    className="text-base font-bold leading-relaxed"
                >
                    Serena Blake is currently accepting new clients. <br />
                    Available for online and in-person sessions.
                </p>
                <Link
                    style={{ color: "rgba(134, 199, 207, 0.9)", borderColor: "rgba(98, 174, 188, 0.9)" }}
                    href="/contact"
                    aria-label="link to contact page"
                    className="border border-solid rounded px-6 py-2 items-center hover:bg-white transition cursor-pointer mx-auto flex">
                    ⭐ <b>Start Healing</b>
                </Link>
            </div >
        </>
    );
}
