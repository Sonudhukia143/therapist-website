import styles from "./Service.module.css";
import Box from "../components/Box";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
    return (
        <>
            <div className="bg-white p-10">
                <nav aria-label="link to homepage" className="text-black p-2 flex gap-8">
                    <Link
                        aria-label="link to homepage"
                        className="cursor-pointer"
                        href="/">Home</Link> &rarr; <p>Therapies</p>
                </nav>
                <div>
                    <h1 className={`${styles.size} font-bold p-2 text-gray-900 mx-auto`}>How I Help</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl mx-auto min-w-full my-6">
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
            </div>
            <Image
                width={400}
                loading="lazy"

                height={400}
                className="absolute -bottom-65 right-0 scale-x-[-1] z-[1] hidden md:flex md:max-h-[250px] md:max-w-[175px] lg:max-h-[300px] lg:max-w-[200px] xl:max-w-[200px] xl:max-h-[300px] xl:right-[5%]" src="/serviceimages/plant.webp" alt="plantwebp"></Image>
        </>
    );
}
