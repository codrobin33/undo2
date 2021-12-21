import WrappedImage from "./WrappedImage";

const TattooDeviceInfo = () => {
    return (
        <div className="relative py-16 bg-white overflow-hidden" id="how-it-works">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span className="block text-base text-center text-indigo-700 font-semibold tracking-wide uppercase">
                            meet the technology
                        </span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            How it works
                        </span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 leading-8">
                        Pulses of high-intensity laser light remove your tattoo by breaking up the tattoo ink into extremely small particles.
                        Your immune system’s white blood cells fight off the ink particles, and are naturally carried out of the body, resulting
                        in a tattoo that is lighter in color or completely removed. Recent advancements in technology introduced new laser
                        devices that can safely remove tattoos efficiently regardless of skin color or skin type.
                    </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                    <div className="w-full">
                        <figure className="m-auto md:float-left w-1/3 md:mr-2">
                            <WrappedImage
                                className="w-full rounded-lg"
                                src="img/piqo.jpg"
                                alt=""
                            />
                        </figure>
                        <h2>Meet the technology</h2>
                        <p >
                            At <strong>Undo Skincare Center</strong>, we use the most advanced technology in the Midwest to make the tattoo process easy and painless!
                            The Lumenis PiQo4 laser is the new gold standard for producing excellent laser tattoo removal outcomes. PiQo4 treats a wide
                            range of pigment colors and its versatile energy matrix ensures effective shattering of pigment deposits. It also has the
                            largest spot size on the market, which allows you to deliver <strong>faster treatments</strong>. The PiQo4 laser uses four true laser wavelengths,
                            Q switching technology – PICO + NANO wavelengths in order to treat the broadest range of pigment/tattoo color, and the highest
                            consistent laser beam power to effectively break up a wide range of colors, even difficult dark blues and greens. Utilizing
                            the largest square beam, up to 15mm, the PiQo4 laser is able to distribute energy evenly throughout your tissue allowing for
                            a more efficient breakup of ink particles while avoiding leaving hot spots.
                        </p>
                    </div>

                    <h2>Pico+Nano for doubly effective treatment</h2>
                    <p>
                        Clinical studies have shown that the optimal method for shattering pigment particles is to treat them with both Nano and Picosecond laser pulses.
                    </p>
                    <figure>
                        <WrappedImage
                            className="w-full rounded-lg"
                            src="img/Rocks-To-Pebbles-To-Sand.png"
                            alt=""
                        />
                    </figure>
                    <p>
                        First, the Nanosecond pulses are used to deliver short bursts of energy that break down the larger and deeper pigment or ink particles.
                        Then, the area is rescanned with Picosecond pulses that dismantle the smaller and shallower particles. This combination yields far better results
                        than using either one of the technologies on its own.
                    </p>


                    <div className="w-full">
                        <figure className="m-auto md:float-right w-1/3 md:mr-2">
                            <WrappedImage
                                className="w-full rounded-lg"
                                src="img/PiQo4-Wheel.png"
                                alt=""
                            />
                        </figure>

                        <h2>4 Wavelengths – For effective shattering of the most popular pigment/ink colors</h2>
                        <p >
                            Since each pigment color absorbs a specific wavelength, PiQo4 offers 4 wavelengths in order to treat the broadest range of pigment/tattoo
                            colors, on the widest range of skin types. Its four wavelengths – 1064nm, 532nm, 650nm and 585nm – target 9 of the most frequently used
                            tattoo colors ranging from light orange to dark black. With PiQo4 you can erase the rainbow.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default TattooDeviceInfo;