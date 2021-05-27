/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

const Contact = () => {
    return (
        <div className="bg-white">
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
                            <div className="flex justify-center">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>+1 (816) 974 8636</p>
                                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <div className="flex-shrink-0">
                                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>info@undo.today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Find us</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                At Undo, Skincare Center, we use only the best and most advanced technology to make the tattoo removal process easy and painless.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Undo, Skincare Center</h3>
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