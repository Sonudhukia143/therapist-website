interface BoxProps {
    title: string;
    description: string;
    image: string;
    alt: string
}

export default function Box({ title, description, image, alt }: BoxProps) {
    return (
        <div className="bg-sky-200 mx-10 p-4 rounded-lg shadow-md border-1 border-black cursor-pointer z-[2]">
            <div className="flex flex-col gap-4 items-center content-center">

                <span className="transition-transform hover:translate-x-2">
                    <img src={image} alt={alt} className="mx-auto rounded-md" />
                    <h1 className="text-xl font-bold text-gray-800 my-4">{title}</h1>
                    <p className="text-gray-800">{description}</p>
                </span>

                <button
                    className="mt-2 border-1 w-full rounded-lg border-black text-black py-2 px-4 transition duration-300 hover:bg-white hover:text-black cursor-pointer border-r-full"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
}
