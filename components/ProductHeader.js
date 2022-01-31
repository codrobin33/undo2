import Image from "next/image";
import TimelyBookButton from "./TimelyBookButton"


const ProductHeader = () => {
    return (
        <main className="lg:relative">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left bg-indigo-700">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16 ">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block text-white xl:inline ">Products to enrich</span>{' '}
                        <span className="block text-pink-400 xl:inline">your skin</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
                        When your skin is healthy and taken care of, it boosts your self-esteem and makes it easier for
                        you to focus on the many other tasks you need to accomplish.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <TimelyBookButton reversed />
                    </div>
                </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <Image
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/img/product_header.jpg"
                    alt="Product Header"
                    layout="fill"
                />
            </div>
        </main>
    );
}

export default ProductHeader;