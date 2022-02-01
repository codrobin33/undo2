/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react';

const Contact = () => {
    const [iframe, setIframe] = useState();

    useEffect(() => {
        setIframe((
            <iframe
                title="Map"
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.366592308801!2d-94.71686598386272!3d39.21183913595133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f5444bc101e3%3A0xf4f32508c4786c5a!2s6442%20NW%20Crooked%20Rd%2C%20Parkville%2C%20MO%2064152!5e0!3m2!1sen!2sus!4v1579745813644!5m2!1sen!2sus"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
            />
        ));

        return () => {
            setIframe();
        }
    }, [])

    return (
        <div className="bg-white" id="contact">
            <div className="relative h-96">
                {(iframe) && (<>{iframe}</>)}
            </div>
            <div className=" py-16 px-4 sm:px-6 lg:px-8">
                <div className="md:max-w-none md:grid md:grid-cols-2 md:gap-8 text-center">
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Call us</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Take the next step and begin removing your unwanted ink! Call us today and schedule your FREE consultation.
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
                                    <div className="space-y-1">
                                        <p className="">Monday - 10 to 5 pm</p>
                                        <p className="">Tuesday - 10 to 7 pm</p>
                                        <p className="">Wednesday - 10 to 5 pm</p>
                                    </div>
                                    <div className="space-y-1">
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
                                At Undo Skincare Center, we use only the best and most advanced technology to make the tattoo removal process easy and painless.
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