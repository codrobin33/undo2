import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
const ImageHeader = () => {
    return (
        <div className="relative bg-indigo-800">
            <div className="absolute inset-0">
                <div className="relative w-full h-full bg-gray-400/10 bg-gradient-to-b from-gray-400/30 via-gray-400/0 to-gray-400 z-10" />

                <div className="h-full w-full">
                    <Image
                        className="absolute top-0 h-full w-full object-cover"
                        src="/img/tape-leg.jpg"
                        alt=""
                        layout="fill"
                    />
                </div>
            </div>

            <div className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 z-10">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mt-14 drop-shadow-xl">How Does Radiofrequency Body Contouring Work?</h1>
                <p className="mt-6 text-xl text-white drop-shadow-xl max-w-3xl">
                    This is a non-invasive technique that uses heat and RF energy to shape your body by getting rid of undesirable fat cells. The technology also smooths your skin where cellulite or sagging may exist.
                </p>
            </div>
        </div>
    )
}


export default ImageHeader;