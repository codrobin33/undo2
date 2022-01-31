import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
const ServicesHeader = () => {
    return (
        <div className="relative bg-indigo-800">
            <div className="pt-24 lg:pb-20">
                <div className="absolute top-0 w-full h-full">
                    <div className="relative w-full h-full bg-gray-900/10 bg-gradient-to-b from-gray-900/50 via-gray-900/20 to-gray-900 z-10" />

                    <div className="h-full w-full">
                        <Image
                            className="absolute top-0 h-full w-full object-cover"
                            src="/img/oranges.jpg"
                            alt=""
                            layout="fill"
                        />
                    </div>
                </div>
                <div className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">All the ways we can help you.</h1>
                    <p className="mt-6 text-xl text-gray-50 max-w-3xl">
                        We have wordclass equipment, staff and products to facilitate any skincare need you may have. Let us help you complete your beauty journey!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default ServicesHeader;