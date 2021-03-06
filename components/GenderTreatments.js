/* This example requires Tailwind CSS v2.0+ */
import { FireIcon, LightBulbIcon, SparklesIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const for_her = [
    {
        id: 1,
        name: 'Skin Rejuvenation',
        description: (
            <>
                Using our technologies, our staff delivers remarkable results on a range of skin aging concerns such as
                age/sun spots, vascular lesions, Acne and Acne scars, uneven texture, wrinkles and skin tone.

                <br />
                <br />
                For relaxation and pampering, our staff delivers the most popular spa treatments to improve your
                appearance; chemical peels, exfoliating facials, dermaplaning, micro-current, jelly mask, massage and
                much more.
            </>
        ),
        icon: SparklesIcon,
    },
    {
        id: 2,
        name: 'Hair Removal',
        description: (
            <>
                Safe, non-invasive treatment that permanently reduces hair growth, resulting in smooth, beautiful skin.
                Our unique IPL (Intense Pulsed Light) technology targets the hair follicles, and impairs their ability to
                grow hair.
            </>
        ),
        icon: FireIcon,
    },
    {
        id: 3,
        name: 'Stretch Marks/Scars',
        description: (
            <>
                A non-invasive laser treatment will help you regain smooth skin and minimize the appearance of stretch
                marks and a variety of causes of scars on different areas of your body, including pregnancy, Acne, and
                weight loss.
            </>
        ),
        icon: LightBulbIcon,
    },
]
const for_him = [
    {
        id: 1,
        name: 'Skin Rejuvenation',
        description: (
            <>
                By using our technologies, our staff delivers remarkable results on a range of skin aging concerns unique
                to men, such as age/sun spots, Rosacea or vascular lesions, Acne and Acne scars, large pours, wrinkles
                and skin tone.
            </>
        ),
        icon: SparklesIcon,
    },
    {
        id: 2,
        name: 'Hair Removal',
        description: (
            <>
                Safe, non-invasive treatment that permanently reduces hair growth, resulting in smooth, beautiful skin.
                Our unique IPL (Intense Pulsed Light) triple pulse technology targets the course and dense hair follicles,
                and impairs their ability to grow hair, with minimal discomfort.
            </>
        ),
        icon: LightBulbIcon,
    },
]

const GenderTreatments = () => {
    return (
        <div className="py-16 bg-white overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                <svg
                    className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                </svg>

                <div className="relative">
                    <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to heal
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                        Your plan is a hand created approach to healing and prevention. You can expect the complete package of innovative sciences and technologies to create a highly stimulating environment to re-energize.
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center" id="for_her">
                    <div className="relative">
                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                            Treatments for her
                        </h3>
                        <p className="mt-3 text-lg text-gray-500">
                            Let us get your to those goals through services such as Skin Rejuvenation, Hair Removal and much more.
                        </p>

                        <dl className="mt-10 space-y-10">
                            {for_her.map((item) => (
                                <div key={item.id} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true" >
                        <svg
                            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                            width={784}
                            height={404}
                            fill="none"
                            viewBox="0 0 784 404"
                        >
                            <defs>
                                <pattern
                                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                        </svg>
                        <Image
                            className="relative mx-auto rounded-3xl"
                            src="/img/for_her.jpg"
                            alt=""
                            width={624}
                            height={624}
                        />
                    </div>
                </div>

                <svg
                    className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>

                <div className="relative mt-12 sm:mt-16 lg:mt-24" id="for_him">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Treatments for him</h3>
                            <p className="mt-3 text-lg text-gray-500">
                                Gone are the days when medical spas were just for women. Our Men???s medical spa offers a wide range of treatments and products tailored towards today???s modern and sophisticated man.
                            </p>

                            <dl className="mt-10 space-y-10">
                                {for_him.map((item) => (
                                    <div key={item.id} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                            <svg
                                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                                width={784}
                                height={404}
                                fill="none"
                                viewBox="0 0 784 404"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                            </svg>
                            <Image
                                className="relative mx-auto rounded-3xl"
                                width={624}
                                height={624}
                                src="/img/for_him.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenderTreatments;