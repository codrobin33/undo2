import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
const ProductLogoCloud = () => {
    return (
        <div className="bg-white relative">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider w-3/4 m-auto">
                    Verified and trusted product partners.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 relative">
                        <div className="p-2">
                            <Image
                                className="h-12 w-auto"
                                src="/img/revision_logo.png"
                                alt="Revision"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 relative">
                        <div className="p-2">
                            <Image
                                className="max-h-12 w-auto"
                                src="/img/elta_logo.svg"
                                alt="EltaMd"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 relative">
                        <div className="p-2">
                            <Image
                                className="h-12 w-auto"
                                src="/img/isagenix.svg"
                                alt="Isagenix"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="col-start-2 col-span-1 flex justify-center py-8 px-8 bg-gray-50 relative">
                        <div className="p-2">
                            <Image
                                className=""
                                src="/img/iSC_Logo_alt.png"
                                alt="Laravel"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLogoCloud;
