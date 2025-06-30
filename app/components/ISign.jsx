export default function ISign() {
    return (
        <>
            <div style={{ width: "80%" }} className="flex bg-white flex-col mx-auto my-4 p-6 border-1 rounded-[10px] border-blue-900">
                <span className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 120 120"
                        width="20"
                        height="20"
                        style={{ verticalAlign: "middle; margin-right: 4px;" }}
                    >
                        <circle cx="60" cy="60" r="55" stroke="red" strokeWidth="8" fill="white" />
                        <text
                            x="62"
                            y="74"
                            textAnchor="middle"
                            fontSize="60"
                            fontWeight="bold"
                            fill="red"
                            fontFamily="Arial, sans-serif"
                            color="red"
                        >
                            !
                        </text>
                    </svg>
                    <h1 className="text-red-700 text-xl font-bold mx-2">
                        Please Note:
                    </h1>
                </span>
                <p className="text-blue-900 text-xl">

                    I do not take insurance directly. However, I can provide
                    you with a billing sheet with the necessary facts and codes
                    so you can file out for <b>out-of-network benifits</b> with
                    your insurance company.
                </p>
            </div>
        </>
    );
}