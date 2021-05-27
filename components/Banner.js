import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Banner = () => (
    <div className="relative bg-indigo-600">
        <div className="w-full py-2 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-row-reverse font-medium text-white">
                <div className="flex items-center justify-center"><FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /><div className="ml-2">Facebook</div></div>
            </div>
        </div>
    </div>
);

export default Banner;