import RadialChart from "./RadialChart";

const CommonReasonsTattooRemoval = () => {

    return (
        <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8" id="reasons">
            <div className="relative">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Common reasons for tattoo removal
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                    Tattoos are meant to be a form of self-expression and while initially you may have been excited about
                    your tattoo, people and feelings change. If this sounds like you, we have a solution to your "permanent
                    ink!"
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