/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useRef } from 'react';

import MapComponent from '../components/Map';
import useOnScreen from '../hooks/shared.hook';

const Contact = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <div className="bg-white" id="contact" ref={ref}>
            <div>
                {isVisible && (
                    <MapComponent />
                )}
            </div>

            <div className=" py-16 px-4 sm:px-6 lg:px-8">
                <div className="md:max-w-none md:grid md:grid-cols-2 md:gap-8 text-center">
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Call us</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Take the next step and call us today to schedule your FREE consultation.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex justify-center items-center space-x-2">
                                <div className="flex">
                                    <div className="inline-flex">
                                        <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <p className="ml-3 text-base text-gray-500">+1 (816) 974 8636</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="inline-flex">
                                        <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <p className="ml-3 text-base text-gray-500">info@undo.today</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7  text-gray-500 text-base">
                                <h4 className="tracking-wide text-lg text-gray-700 font-semibold underline underline-offset-1 mb-2">Business Hours</h4>
                                <div className="flex justify-center space-x-4">
                                    <div className="space-y-1 w-full">
                                        <p className="">Monday - 10 to 5 pm</p>
                                        <p className="">Tuesday - 10 to 7 pm</p>
                                        <p className="">Wednesday - 10 to 5 pm</p>
                                    </div>
                                    <div className="space-y-1 w-full">
                                        <p className="">Thursday - 10 to 5 pm</p>
                                        <p className="">Friday - 10 to 4 pm</p>
                                        <p className="">Saturday (1st and 3rd) - 9 to noon</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Find us</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                At Undo Skincare Center, we use only the best and most advanced technology to make treatments easy and painless.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Undo Skincare Center</h3>
                                <div className="mt-2 text-base text-gray-500">
                                    <p>6442 NW Crooked Rd.</p>
                                    <p className="mt-1">Parkville, MO 64152</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;