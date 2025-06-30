import Link from "next/link";
import ContactForm from "./Form";
import ISign from "./ISign";

export default function Details() {
    return (
        <>
            <div className="w-[100%] bg-[rgba(181,219,223,0.7)]">

                <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xlg:grid-cols-2">
                    <div className="order-2 md:order-1 lg:order-1 xlg:order-1 mx-auto flex flex-col items-start sm:items-center justify-evenly">
                        <span className="flex w-full flex-col justify-evenly gap-2 items-center md:item-start lg:items-start xlg:items-start my-6 sm:my-6">
                            <h1 className="text-4xl font-bold">Our Office</h1>
                            <p className="text-2xl">1287 Maplewood Drive,</p>
                            <p className="text-2xl"> Los Angeles</p>
                            <p className="text-2xl">CA 90026</p>
                            <Link
                            aria-label="search the location of office"
                            href="/locations" 
                            className="bg-[#1E4145] opacity-999 text-[rgba(181,219,223,9)] inline-block p-2 rounded w-30">
                                <p className="text-center">
                                    Google Maps
                                </p>
                            </Link>
                        </span>
                        <span className="flex w-full flex-col justify-evenly gap-2 items-center md:item-start lg:items-start xlg:items-start my-6 sm:my-6">
                            <h1 className="text-4xl font-bold">Hours</h1>
                            <h2 className="text-2xl">Monday: 1:00 PM - 5:00 PM</h2>
                            <h2 className="text-2xl">Wednesday: 1:00 PM - 5:00 PM</h2>
                            <h2 className="text-2xl">Friday: 1:00 PM - 5:00 PM</h2>
                        </span>
                        <span className="flex w-full flex-col justify-evenly gap-2 items-center md:item-start lg:items-start xlg:items-start my-6 sm:my-6">
                            <h1 className="text-4xl font-bold">Contact</h1>
                            <h2 className="text-2xl">📞 (323) 555-0192</h2>
                        </span>
                    </div>


                    <div className="lg:order-1 p-8 md:order-1 xlg:order-1 w-full mx-auto">
                            <ContactForm />
                    </div>
                </div>

                <div className="flex w-full">
                        <ISign />
                </div>

            </div>
        </>
    )
}






