import { useCallback, useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { Transition } from "@headlessui/react";
import TimelyBookButton from "./TimelyBookButton";

const HEADLINES = [
    'Body Sculpting',
    'Skin Rejuvenation',
    'Skin Care Products',
    'Tattoo Removal',
    'Aesthetic Treatments',
    'Acne Treatments',
    'RF Body Contouring'
];

const MainHero = () => {
    const [line, setLine] = useState(0);
    const [transition, setTransition] = useState(false);

    const { seconds, reset } = useStopwatch({ autoStart: true });

    const changeLine = useCallback(() => {
        setLine((line >= HEADLINES.length - 1) ? 0 : line + 1);
        setTransition(false);
        reset();
    })

    useEffect(() => {
        if (seconds >= 3 && !transition) {
            setTransition(true);
        }
    }, [seconds]);

    return (
        <div className="relative bg-white" style={{ marginTop: '0' }}>
            <main className="lg:relative">
                <div className="w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-3/5 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">We are the experts in</span>{' '}
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
                                    <span className="block text-indigo-600 xl:inline">{hl}</span>
                                </Transition>
                            ))}
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            At Undo, Skincare Center, Tattoo Removal and Day Med Spa, we want you to look and feel your best. Our team are experts here to provide a customized treatment plan to help you get there!
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <TimelyBookButton />
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a
                                    href="/services"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden md:inline w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 lg:h-full">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="img/acne_slider1.jpg"
                        alt=""
                    />
                </div>
            </main>
        </div>
    );
}

export default MainHero;