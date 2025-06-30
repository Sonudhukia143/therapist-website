import Link from "next/link";
import ContactForm from "./Form";

export default function Details() {
    return (
        <>
            <div className="w-[100%] bg-[rgba(181,219,223,0.7)]">
                <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xlg:grid-cols-2">
                    <div className="order-2 md:order-1 lg:order-1 xlg:order-1 mx-auto">
                        <span>
                            <h1 className="text-4xl font-bold">Our Office</h1>
                            <p className="text-2xl">1287 Maplewood Drive,</p>
                            <p className="text-2xl"> Los Angeles</p>
                            <p className="text-2xl">CA 90026</p>
                            <Link href="/google-maps" className="bg-[#1E4145] opacity-999 text-[rgba(181,219,223,0.7)] inline-block p-2 rounded">
                                <p>
                                    Google Maps
                                </p>
                            </Link>
                        </span>

                        <span>
                            <h1 className="text-4xl font-bold">Hours</h1>
                            <h2 className="text-2xl">Monday: 1:00 PM - 5:00 PM</h2>
                            <h2 className="text-2xl">Wednesday: 1:00 PM - 5:00 PM</h2>
                            <h2 className="text-2xl">Friday: 1:00 PM - 5:00 PM</h2>
                        </span>

                        <span>

                            <h1 className="text-4xl font-bold">Contact</h1>
                            <h2 className="text-2xl">📞 (323) 555-0192</h2>
                        </span>

                    </div>
                    <div className="sm:order-1 order-2 w-100 mx-auto">
                        <ContactForm />
                    </div>
                </div>

                <div className="">
                    <h1>
                    </h1>

                </div>
            </div>
        </>
    )
}










// <p>
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 100 100"
//         width="16"
//         height="16"
//         style={{ verticalAlign: "middle; margin-right: 4px;" }}
//     >
//         <circle cx="50" cy="50" r="45" stroke="black" stroke-width="6" fill="white" />
//         <text
//             x="50"
//             y="62"
//             text-anchor="middle"
//             font-size="60"
//             font-weight="bold"
//             fill="black"
//             font-family="Arial, sans-serif"
//         >
//             !
//         </text>
//     </svg>
//     Important note: All sessions must be pre-booked.
// </p>