import RadialChart from "./RadialChart";

const CommonReasonsTattooRemoval = () => {

    return (
        <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <div className="relative">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    A better way to heal
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                    Your plan is a hand created approach to healing and prevention. You can expect the complete package of innovative sciences and technologies to create a highly stimulating environment to re-energize.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-5">
                <div className="flex flex-col items-center">
                    <RadialChart progress={58} />
                    <p className="w-48 text-center text-gray-500">THE TATTOO IS OLD OR POORLY DESIGNED</p>
                </div>
                <div className="flex flex-col items-center">
                    <RadialChart progress={57} />
                    <p className="w-48 text-center text-gray-500">THE TATTOO CONTAINS A NAME FROM A PAST RELATIONSHIP</p>
                </div>
                <div className="flex flex-col items-center">
                    <RadialChart progress={38} />
                    <p className="w-48 text-center text-gray-500">THE INDIVIDUAL WANTS TO ADD A NEW TATTOO</p>
                </div>
                <div className="flex flex-col items-center">
                    <RadialChart progress={38} />
                    <p className="w-48 text-center text-gray-500">THE INDIVIDUAL'S CAREER DOESN'T ALLOW VISIBLE TATTOOS</p>
                </div>
                <div className="flex flex-col items-center">
                    <RadialChart progress={57} />
                    <p className="w-48 text-center text-gray-500">THE TATTOO IS HARD TO COVER UP</p>
                </div>
                <div className="flex flex-col items-center">
                    <RadialChart progress={38} />
                    <p className="w-48 text-center text-gray-500">THE INDIVIDUAL WANTS CLEAN SKIN FOR A SPECIAL OCCASION</p>
                </div>
            </div>
        </div>
    );
}

export default CommonReasonsTattooRemoval;