import TimelyBookButton from "./TimelyBookButton";
import WrappedImage from "./WrappedImage";

/* This example requires Tailwind CSS v2.0+ */
export default function EquipmentHeader() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Next Generation equipment is here
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Undo Skincare Center is dedicated to bringing Kansas City the best technology to meet any skincare need you might have.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <WrappedImage
                                                    src="img/nuera.png"
                                                    alt=""
                                                    className="w-full h-full object-center  object-contain"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <WrappedImage
                                                    src="img/m22.png"
                                                    alt=""
                                                    className="w-full h-full object-center  object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <WrappedImage
                                                    src="img/ResurFX.webp"
                                                    alt=""
                                                    className="w-full h-full object-center  object-contain"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <WrappedImage
                                                    src="img/piqo.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <WrappedImage
                                                    src="img/ipl.webp"
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <WrappedImage
                                                    src="img/nuera_extra.webp"
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <WrappedImage
                                                    src="img/nuera.png"
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="inline-block"
                            >
                                <TimelyBookButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
