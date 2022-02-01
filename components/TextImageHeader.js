import { useState, useEffect, useCallback } from "react";
import { useStopwatch } from "react-timer-hook";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import TimelyBookButton from "./TimelyBookButton";

const HEADLINES = [
    'Body Sculpting',
    'Skin Rejuvenation',
    'Skincare Products',
    'Tattoo Removal',
    'Aesthetic Treatments',
    'Acne Treatments',
    'RF Body Contouring'
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const TextImageHeader = ({
    src = '/img/smile.jpg',
    reversed = false
}) => {
    const [line, setLine] = useState(0);
    const [transition, setTransition] = useState(false);

    const { seconds, reset } = useStopwatch({ autoStart: true });

    const changeLine = useCallback(() => {
        setLine((line >= HEADLINES.length - 1) ? 0 : line + 1);
        setTransition(false);
        reset();
    });

    useEffect(() => {
        if (seconds >= 3 && !transition) {
            setTransition(true);
        }
    }, [seconds]);

    return (
        <div className="relative">
            <div className="bg-gray-800 pt-24 lg:pt-24 lg:pb-20">
                <div className="absolute top-0 h-full w-full overflow-hidden">
                    <div className="relative w-full h-full bg-gray-800/10 bg-gradient-to-b from-gray-800/50 via-gray-800/20 to-gray-800 z-10" />

                    <div className="h-full w-full absolute top-0">
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                className={classNames(
                                    "top-0 h-full w-full",
                                    reversed && '-scale-x-100'
                                )}
                                layout="fill"
                                alt="Hero"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl mt-14 md:mt-0">
                    <div className="lg:grid lg:px-8 flex lg:justify-start">
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center z-10">
                            <div className="lg:py-24">
                                <Link href={"/services"} passHref>
                                    <a
                                        className="inline-flex items-center text-white bg-gray-900/75 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                    >
                                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full">
                                            What&apos;s new?
                                        </span>
                                        <span className="ml-4 text-sm">Visit our services page</span>
                                        <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                    </a>
                                </Link>
                                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl drop-shadow-2xl">
                                    <span className="block">We are the experts in</span>
                                    {HEADLINES.map((hl, i) => (
                                        <Transition
                                            key={i}
                                            show={i === line && !transition}
                                            enter="transition-opacity duration-150"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => changeLine()}
                                        >
                                            <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 sm:pb-5">
                                                {hl}
                                            </span>
                                        </Transition>
                                    ))}

                                </h1>
                                <p className="text-white text-lg sm:text-2xl font-bold drop-shadow-2xl hidden md:block">
                                    At Undo Skincare Center we want you to look and feel your best.  Our team of experts in skincare, tattoo removal and med spa services are here to provide your customized treatment plan
                                </p>
                                <p className="text-white text-lg sm:text-2xl font-bold drop-shadow-2xl block md:hidden">
                                    At Undo Skincare Center we want you to look and feel your best.
                                </p>
                                <div className="mt-10 sm:mt-12">
                                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                        <div className="sm:flex">
                                            <div className="">
                                                <TimelyBookButton />
                                            </div>
                                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                                <Link href="/services" passHref>
                                                    <a
                                                        className="text-center bg-transparent block w-full px-8 py-3 md:py-4 md:text-lg md:px-10 rounded-md shadow text-white font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-gray-900 border-2 border-indigo-500 hover:border-transparent"
                                                    >
                                                        Learn more
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextImageHeader;