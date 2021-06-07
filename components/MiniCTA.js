import TimelyBookButton from "./TimelyBookButton";

/* This example requires Tailwind CSS v2.0+ */
const MiniCTA = () => {
    return (
        <div className="bg-indigo-700">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-2">
                    <span className="block">Boost your productivity.</span>
                    <span className="block">Start using Workflow today.</span>
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <TimelyBookButton reversed>
                            Book now
                        </TimelyBookButton>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MiniCTA;