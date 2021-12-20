import { useCallback, useState, useMemo } from "react";

const list = [
    {
        before: "/img/skin_resurfacing_before.jpg",
        before_desc: 'Baseline',
        after: "/img/skin_resurfacing_after.jpg",
        after_desc: 'After 1 treatment'
    },
    {
        before: "/img/acne_before.jpg",
        before_desc: 'Baseline',
        after: "/img/acne_after.jpg",
        after_desc: 'After 5 treatment'
    },
    {
        before: "/img/tattoo_wing_before.jpg",
        before_desc: 'Baseline',
        after: "/img/tattoo_wing_after.jpg",
        after_desc: 'After 9 treatment'
    },
    {
        before: "/img/vascular_lesions_before.jpg",
        before_desc: 'Baseline',
        after: "/img/vascular_lesions_after.jpg",
        after_desc: 'After 9 treatment'
    }
];

const Pages = ({ set, current, count }) => (
    /* This example requires Tailwind CSS v2.0+ */

    <nav className="flex items-center justify-center" aria-label="Progress">
        <ol role="list" className="flex items-center space-x-5">
            {Array.from({ length: count }).map((_, i) => (
                <li key={i}>

                    {i === current ? (
                        <div onClick={() => set(i)} className="relative flex items-center justify-center cursor-pointer" aria-current="step">
                            <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                                <span className="w-full h-full rounded-full bg-indigo-200" />
                            </span>
                            <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
                            <span className="sr-only">{i}</span>
                        </div>
                    ) : (
                        <div onClick={() => set(i)} className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400 cursor-pointer">
                            <span className="sr-only">{i}</span>
                        </div>
                    )}
                </li>
            ))}
        </ol>
    </nav>
);

export default function BeforeAfter() {
    const [page, setPage] = useState(0);

    const currentPage = useMemo(() => {
        return list[page];
    }, [list, page]);

    const set = useCallback((step) => {
        if (step <= list.length) {
            setPage(step);
        }
    }, [list]);

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* Details section */}
                <section aria-labelledby="details-heading">
                    <div className="flex flex-col items-center text-center">
                        <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Before / After
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-600">
                            A few examples on how Undo, Skincare Center can help you!
                        </p>
                    </div>


                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <img
                                    src={currentPage.before}
                                    alt=""
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <p className="text-center text-base text-gray-500">
                                {currentPage.before_desc}
                            </p>
                        </div>
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <img
                                    src={currentPage.after}
                                    alt=""
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <p className="text-center text-base text-gray-500">
                                {currentPage.after_desc}
                            </p>
                        </div>
                    </div>

                    <Pages
                        set={set}
                        current={page}
                        count={list.length}
                    />
                </section>
            </div>
        </div>
    )
}
