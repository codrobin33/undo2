/* This example requires Tailwind CSS v2.0+ */
const ServicesHeader = () => {
    return (
        <div className="relative bg-indigo-800">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="img/oranges.jpg"
                    alt=""
                />
                <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">All the ways we can help you.</h1>
                <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                    We have wordclass equipment, staff and products to facilitate any skin care need you may have. Let us help you complete your beauty journey!
                </p>
            </div>
        </div>
    )
}


export default ServicesHeader;