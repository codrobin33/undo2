import TimelyBookButton from "./TimelyBookButton";

const TattooPricing = () => {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="pricing">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="text-base max-w-prose lg:max-w-none">
                        <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Affordable tattoo removal</h2>
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
                        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                            <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                                <p className="mt-8 text-xl text-gray-500 leading-8">
                                    So you're ready to remove your tattoo, but you’re worried about the cost of treatments? Don’t turn down
                                    tattoo removal treatments because of the price! Undo Laser Skincare Clinic provides treatments designed
                                    to fit anyone's budget!
                                </p>

                                <div className="flex items-center justify-center">
                                    <TimelyBookButton>
                                        Book now
                                    </TimelyBookButton>
                                </div>

                                <p>
                                    Tattoo removal is actually more affordable than you think! There are several factors that determine how
                                    much it will cost to remove your tattoo. Dermatologists and skin experts categorized these factors and
                                    identified three major elements that will determine how much it will cost.
                                </p>

                                <h3>Size:</h3>
                                <p>
                                    Size is the number one factor in determining how much it will cost to remove your tattoo. Undo, Laser Skincare
                                    Center measures tattoos in compressed ink square inches, and we charge per square inch to remove a tattoo.
                                </p>
                                <h3>Location:</h3>
                                <p>
                                    Where your tattoo is matters when determining the cost of removal. If your tattoo is in a sensitive location,
                                    session times will be reduced to prevent an adverse reaction or damage to the outer layer of your skin. This will
                                    increase the number of sessions needed to completely remove the tattoo.
                                </p>
                                <h3>Quality:</h3>
                                <p>
                                    Quality of the tattoo pertains to the color, design, density or thickness, and the type of ink used in your tattoo.
                                    Laser tattoo removal is more successful on darker shades such as black, dark blue, and red but lighter shades
                                    such as orange, yellow, and green take longer to remove which increases the number of sessions needed. In addition,
                                    more detailed designs take longer. Density refers to the type of pigment used in a tattoo and how thick the ink is.
                                    Thicker pigments require more work from the laser to break down and the body's immune system has to work harder to
                                    remove the broken particles.
                                </p>

                                <div className="text-center text-2xl max-w-lg m-auto font-semibold text-black">
                                    Pricing starting at $129 per square inch of compressed ink.
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TattooPricing;