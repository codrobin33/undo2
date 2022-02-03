import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
const ServicesHeader = () => {
    return (
        <div className="relative bg-gray-400">
            <div className="pt-24 lg:pb-20">
                <div className="absolute top-0 w-full h-full">
                    <div className="relative w-full h-full bg-gray-800/10 bg-gradient-to-b from-gray-600/40 via-gray-400/0 z-10" />

                    <div className="absolute bottom-0 w-full h-1/3 header-gradient z-10" />

                    <div className="h-full w-full">
                        <Image
                            className="absolute top-0 h-full w-full object-cover"
                            src="/img/light.jpg"
                            alt=""
                            layout="fill"
                        />
                    </div>
                </div>
                <div className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-xl">All the ways we can help you.</h1>
                    <div className="backdrop-blur-sm backdrop-contrast-50 backdrop-opacity-75 p-4 mt-4  max-w-3xl">
                        <p className="text-white text-lg sm:text-2xl font-bold drop-shadow-lg shadow-indigo-600">
                            We have wordclass equipment, staff and products to facilitate any skincare need you may have. Let us help you complete your beauty journey!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ServicesHeader;