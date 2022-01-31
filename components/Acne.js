import WrappedImage from "./WrappedImage";

const Acne = () => {
    return (
        <div className="relative py-16 bg-white overflow-hidden" id="how-it-works">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-2xl mx-auto" aria-hidden="true">
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
            <div className="relative">
                <div className=" prose prose-2xl mx-auto">
                    <div className="w-full">
                        <h2 className="text-center">
                            Acne treatments
                        </h2>
                        <p className="mt-8 text-xl text-gray-500 leading-8">
                            Undo, Skincare Center uses a three-prong approach to treating acne. This approach includes daily use of a purifying cleanser to make sure that your skin is clean and not oily. Next, Oil-free Board-Spectrum SPF 46 with Zinc to help calm and protect sensitive skin types prone to discoloration and breakouts associated with acne and rosacea. And lastly, a series of IPL Acne treatments, taking less than twenty-minutes each. Results are typically seen two-weeks after the first treatment.
                        </p>
                    </div>
                </div>
                <div className="mt-6 prose prose-2xl text-gray-500 mx-auto">
                    <div className="w-full">
                        <figure className="m-auto md:float-left w-1/3 md:mr-4 mb-2">
                            <WrappedImage
                                className="w-full rounded-lg"
                                src="img/mask.jpg"
                                alt=""
                            />
                        </figure>
                        <h3>Teenage, adult or wearing a mask</h3>
                        <p className="text-xl leading-8">
                            Teenagers, adults, anyone wearing a mask may suffer from acne breakouts. Undo, Skincare offers Intense Pulsed Light (IPL) treatments for acne and scarring. These treatments have been taking the skincare industry by storm in recent years.
                        </p>
                    </div>

                    <h3>Over the counter</h3>
                    <p className="text-xl leading-8">
                        If you've tried over-the-counter (nonprescription) acne products designed to clear skin become clogged with oil, dirt, and bacteria for several weeks and they haven't helped, it may be time to look into professional acne treatments to make your skin brighter and clearer without the potential collateral damage of prescribed medications.
                    </p>
                    <figure className="m-auto md:float-right w-1/3">
                        <WrappedImage
                            className="w-full rounded-lg"
                            src="img/medications.jpg"
                            alt=""
                        />
                    </figure>
                    <h3>Medications</h3>
                    <p className="text-xl leading-8">
                        Acne drugs may be effective for one or more of the causes of acne, however these drugs can cause collateral damage and may result in nausea, vomiting, diarrhea, mood changes, changes in vision, and permanent scarring.
                    </p>


                    <div className="w-full">
                        <h3>Acne scars</h3>
                        <p className="text-xl leading-8">
                            Living with acne scars can be physically and emotionally difficult for people of all ages. The Lumenis ResurFX, is the latest in non-ablative, fractional laser technology to improve skin discoloration, stretch marks, acne scars, wrinkles, and more. Non-ablative means it does not destroy or ablate the skin cells, while fractional means it is only affecting a fraction or percentage of the skin. The benefit of the ResurFX is that it is able to get great results with minimal recovery time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acne;