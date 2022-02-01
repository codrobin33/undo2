import { TicketIcon, TrendingUpIcon, UserIcon } from "@heroicons/react/outline";

const Perks = () => {
    return (
        <div className="">
            <h2 className="sr-only">Our Perks</h2>
            <div className="max-w-5xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 ">
                <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                        <UserIcon className="flex-shrink-0 h-8 w-8 text-indigo-700 z-10" />

                        <div className="ml-4 flex-auto flex flex-col-reverse z-10">
                            <h3 className="font-medium text-white">Customized treatment plans</h3>
                            <p className="text-sm text-white/75">Unique for you</p>
                        </div>
                    </div>
                </div>
                <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none  z-10">
                    <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">

                        <TrendingUpIcon className="flex-shrink-0 h-8 w-8 text-indigo-700 z-10" />

                        <div className="ml-4 flex-auto flex flex-col-reverse z-10">
                            <h3 className="font-medium text-white">Advanced technology</h3>
                            <p className="text-sm text-white/75">Ahead of the competition</p>
                        </div>
                    </div>
                </div>
                <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                    <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">

                        <TicketIcon className="flex-shrink-0 h-8 w-8 text-indigo-700 z-10" />
                        <div className="ml-4 flex-auto flex flex-col-reverse z-10">
                            <h3 className="font-medium text-white">Certificated technicians</h3>
                            <p className="text-sm text-white/75">The proof is in the work</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Transition = () => {

    return (
        <div className="relative ">
            <div className="bg-gray-800 text-white w-full">
                <Perks />
            </div>
            <div className="bg-white -mt-5  md:-mt-20 -mb-10 md:-mb-16">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1F2937" fillOpacity="1" d="M0,256L60,250.7C120,245,240,235,360,208C480,181,600,139,720,117.3C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
        </div>
    );
};

export default Transition;