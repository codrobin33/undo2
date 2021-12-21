import TimelyBookButton from "./TimelyBookButton";

/* This example requires Tailwind CSS v2.0+ */
const InfoCTA = () => {
    return (
        <div className="bg-indigo-700" style={{ marginTop: '0' }}>
            <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Welcome to Undo</span>
                    <span className="block">Kansas City's Choice in Skincare.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                    Our team of experts are here to provide a customized treatment plan
                    to help you look and feel your best! Our service begins with a personalized consultation to
                    fully understand your objective, introduce an array of innovative treatments
                    and products to get the results you want and deserve.
                </p>
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




export default InfoCTA;