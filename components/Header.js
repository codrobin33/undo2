/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BeakerIcon,
    CursorClickIcon,
    MenuIcon,
    UserIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, CogIcon, CurrencyDollarIcon, QuestionMarkCircleIcon, UserIcon as UserSolidIcon } from '@heroicons/react/solid'
import TimelyBookButton from './TimelyBookButton'
import Link from 'next/link'
import Image from 'next/image'
import Banner from './Banner'

const tattoos = [
    {
        name: 'Tattoo Removal',
        description: 'Learn about how Undo can remove your unwanted ink.',
        href: '/tattoo',
        icon: CursorClickIcon
    },
    {
        name: 'How it works',
        description: 'Get a better understanding of how the tatto removal process works.',
        href: '/tattoo#how-it-works',
        icon: CogIcon,
    },
    {
        name: 'Reasons for removal',
        description: 'Find out why people remove their tattoos',
        href: '/tattoo#reasons',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Pricing',
        description: "Connect with third-party tools that you're already using.",
        href: '/tattoo#pricing',
        icon: CurrencyDollarIcon,
    }
];

const med_spas = [
    {
        name: 'Treatments for her',
        description: 'Skin Rejuvenation, Sun Spots, Hair, Stretch marks and more.',
        href: '/med_spa#for_her',
        icon: UserIcon,
    },
    {
        name: 'Treatments for him',
        description: 'Skin Rejuvenation, Hair Removal and more.',
        href: '/med_spa#for_him',
        icon: UserSolidIcon,
    },
    {
        name: 'Acne',
        description: 'We offer Intense Pulsed Light (IPL) treatments for acne and scarring.',
        href: '/acne',
        icon: BeakerIcon,
    }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {

    const [scrollTop, setScrollTop] = useState(true);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (currentPosition > scrollTop) {
                // downscroll code
                setScrolling(false);
            } else {
                // upscroll code
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? true : false);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="absolute w-full">
                <Popover as="header" className={classNames(
                    "sticky top-0 z-40 w-full  flex-none transition-colors duration-300 lg:z-50 lg:border-b lg:border-gray-900/10 border-gray-50/[0.06] md:pb-4",
                    !scrollTop ? 'bg-white backdrop-blur' : 'border-none bg-gradient-to-b from-black/50'
                )}>
                    {({ open }) => (
                        <>
                            <Banner />
                            <div className="px-4 sm:px-6 max-w-7xl mx-auto">
                                <div className="flex justify-between items-center py-2 md:py-6 md:justify-start md:space-x-10">
                                    <div className="flex justify-start lg:w-0 lg:flex-1 cursor-pointer">
                                        <Link href="/" passHref>
                                            <a className="">
                                                <span className="sr-only">Undo</span>
                                                {(scrollTop) ? (
                                                    <Image
                                                        className="h-12 w-auto sm:h-12"
                                                        src="/img/undo_reversed_white.png"
                                                        alt=""
                                                        width={85.33}
                                                        height={48}
                                                    />
                                                ) : (
                                                    <Image
                                                        className="h-12 w-auto sm:h-12"
                                                        src="/img/undo_reversed.png"
                                                        alt=""
                                                        width={85.33}
                                                        height={48}
                                                    />
                                                )}

                                            </a>
                                        </Link>
                                    </div>
                                    <div className="-mr-2 -my-2 md:hidden">
                                        <Popover.Button className={classNames(
                                            "rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                                            scrollTop ? 'text-white' : 'text-gray-500'
                                        )}
                                        >
                                            <span className="sr-only">Open menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                    <Popover.Group as="nav" className="hidden md:flex space-x-6 lg:space-x-10">
                                        <Link href="/" passHref>
                                            <a className={classNames(
                                                !scrollTop ? 'text-gray-800' : 'text-gray-50',
                                                "text-base font-medium hover:text-indigo-500 cursor-pointer"
                                            )}
                                            >
                                                Home
                                            </a>
                                        </Link>

                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            !scrollTop ? 'text-gray-800' : 'text-gray-50',
                                                            'group rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                        )}
                                                    >
                                                        <span>Medical&nbsp;Spa</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                !scrollTop ? 'text-gray-800' : 'text-gray-50',
                                                                'ml-2 h-5 w-5 group-hover:text-indigo-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel
                                                            static
                                                            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                                        >
                                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                    {med_spas.map((item) => (
                                                                        <Link
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            passHref
                                                                        >
                                                                            <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                                <div className="ml-4">
                                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                                </div>
                                                                            </a>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>

                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            !scrollTop ? 'text-gray-800' : 'text-gray-50',
                                                            'group rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                        )}
                                                    >
                                                        <span>Tattoo</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                !scrollTop ? 'text-gray-800' : 'text-gray-50',
                                                                'ml-2 h-5 w-5 group-hover:text-indigo-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel
                                                            static
                                                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                        >
                                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                    {tattoos.map((item) => (
                                                                        <Link
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            passHref
                                                                        >
                                                                            <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                                <div className="ml-4">
                                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                                </div>
                                                                            </a>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>

                                        <Link href="#contact" passHref>
                                            <a className={classNames(
                                                !scrollTop ? 'text-gray-800' : 'text-gray-50',
                                                "text-base font-medium hover:text-indigo-500 cursor-pointer"
                                            )}
                                            >
                                                Contact&nbsp;us
                                            </a>
                                        </Link>
                                    </Popover.Group>
                                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                        <TimelyBookButton size="small" />
                                    </div>
                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-5 pb-6 px-5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <Image
                                                        className="h-8 w-auto"
                                                        src="/img/Undo_psdraw.jpg"
                                                        alt="Workflow"
                                                        width={60}
                                                        height={35}
                                                    />
                                                </div>
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <nav className="grid gap-y-8">
                                                    {tattoos.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            passHref
                                                        >
                                                            <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer">
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                                            </a>
                                                        </Link>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5 space-y-6">
                                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                                {med_spas.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        passHref
                                                    >
                                                        <a className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer">{item.name}</a>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                                <Link
                                                    href="/"
                                                >
                                                    Book now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </header>
    );
}
