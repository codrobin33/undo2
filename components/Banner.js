import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { PhoneIcon, MailIcon } from '@heroicons/react/solid';

const Banner = () => (
    <div className="relative bg-indigo-600">
        <div className="w-full py-2 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-row-reverse font-medium text-white">
                <a href="https://www.facebook.com/undotoday" className="flex items-center justify-center ml-2">
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                    <div className="ml-2 hidden sm:block">Facebook</div>
                </a>
                <a href="mailto:info@undo.today" className="flex items-center justify-center ml-2">
                    <MailIcon className="w-4 h-4 mr-1" />
                    <div className="hidden sm:block"> info@undo.today</div>
                </a>
                <a href="tel:(816) 974-8638" className="flex items-center justify-center">
                    <PhoneIcon className="w-4 h-4 mr-1" />
                    <div className="hidden sm:block">(816) 974-8638</div>
                </a>
            </div>
        </div>
    </div>
);

export default Banner;