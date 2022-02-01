import TimelyBookButton from "./TimelyBookButton";

const TattooPricing = () => {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="pricing">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="text-base max-w-prose lg:max-w-none">
                        <h2 className="leading-6 text-indigo-700 font-semibold tracking-wide uppercase">Affordable tattoo removal</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Pricing
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <svg
                        className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                    </svg>
                    <svg
                        className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                    </svg>
                    <div className="relative md:bg-white md:p-6">
                        <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                            <p className="mt-8 text-xl text-gray-500 leading-8">
                                So you're ready to remove your tattoo, but you’re worried about the cost of treatments? Don’t turn down
                                tattoo removal treatments because of the price! Undo Skincare Center provides treatments designed
                                to fit anyone's budget!
                            </p>

                            <div className="flex items-center justify-center">
                                <TimelyBookButton>
                                    Book now
                                </TimelyBookButton>
                            </div>

                            <p>
                                Tattoo removal is actually more affordable than you think! We categorized several factors and
                                identified major elements in determining the cost to remove your tattoo. Each of the factors are discussed during your consultation and post treatment recommendation are
                                provided on how you can contribute to a quicker removal process, and potentially reduce the number of
                                treatments needed.
                            </p>

                            <h3>Size:</h3>
                            <p>
                                Size, small, medium, large or extra-large is the primary factor.
                            </p>
                            <h3>Location:</h3>
                            <p>
                                Where on your body, chest, arm, leg, back, foot, or face, the tattoo is located may increase the number
                                of sessions needed.
                            </p>
                            <h3>Quality:</h3>
                            <p>
                                Quality of the tattoo pertains to the design, density or thickness, skill of the artist, and the type of ink
                                used in the tattoo may require more additional sessions to break down the ink particles.
                            </p>
                            <h3>Colors:</h3>
                            <p>
                                Green, blue, purple, orange and other ink colors increase the number of sessions needed over just black.
                            </p>
                            <h3>Age:</h3>
                            <p>
                                Newer ink, less than a couple years old, may be more difficult and require additional sessions.
                            </p>
                            <h3>Lymphatic Health:</h3>
                            <p>
                                Your body's immune system has to work hard to remove the broken ink particles. Some life style choices
                                increase the number of sessions needed.
                            </p>



                            <div className="text-center text-2xl max-w-2xl m-auto font-semibold text-black">
                                During your consultation, the number of estimated treatments and the cost for tattoo removal
                                will be discussed. Pricing starts at $139 per session for small area treatment package.
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TattooPricing;