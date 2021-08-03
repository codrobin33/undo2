/* This example requires Tailwind CSS v2.0+ */
const ProductLogoCloud = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider w-3/4 m-auto">
                    Verified and trusted product partners.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="/img/revision_logo.png"
                            alt="Revision"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="/img/elta_logo.svg" alt="EltaMd" />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="/img/elixir_logo.svg" alt="Tuple" />
                    </div>
                    <div className="col-start-2 col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="/img/iSC_Logo_alt.png" alt="Laravel" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLogoCloud;
