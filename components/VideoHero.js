import TimelyBookButton from "./TimelyBookButton";

const VideoHero = () => {
    return (
        <div style={{ marginTop: '0' }}>
            <div className="relative items-center justify-center w-full h-full">
                <div>
                    <div className="inset-0">
                        <video playsInline autoPlay muted loop id="bgvideo">
                            <source src="/video/pico_bg.mp4#t=0.1" type="video/mp4" />
                        </video>
                    </div>

                    {/* <div className="absolute inset-0 z-20 flex items-center justify-center h-full w-full texture bg-opacity-25" ></div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center h-full w-full gradient" ></div>
                    <div
                        data-aos="flip-down"
                        className="absolute inset-0 z-40  flex flex-col items-center h-full w-full "
                    >
                        <div className="container flex-grow max-w-6xl pl-0 mx-auto sm:pl-8 xl:pl-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                            <div className="relative text-center ">
                                <h1 className="text-white relative mb-4 text-6xl font-bold font-sans italic leading-none text-center lg:text-9xl xl:text-9xl"> You should be&nbsp;<span className="text-red-500">here</span></h1>
                                <button
                                    className="bg-gray-600 bg-opacity-50 text-white active:bg-gray-200 font-bold uppercase px-8 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                                    type="button"
                                    onClick={() => window.location = '/book'}
                                >
                                    Book now
                                </button>
                            </div>
                        </div>

                        <div className="absolute cloud-divider w-full h-20" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default VideoHero;