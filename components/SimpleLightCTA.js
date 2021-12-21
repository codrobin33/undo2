import Link from "next/link";
import TimelyBookButton from "./TimelyBookButton";

export default function SimpleLightCTA() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">Book your free consultation today</span>
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <TimelyBookButton />
                    </div>
                    <div className="ml-3 inline-flex">
                        <Link href="/services" passHref>
                            <a

                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                            >
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
