
const VideoHero = () => {
    return (
        <div style={{ marginTop: '0' }}>
            <div className="relative items-center justify-center w-full h-full">
                <div>
                    <div className="inset-0">
                        <video playsInline autoPlay muted loop id="bgvideo">
                            <source src={`${process.env.img_url}video/pico_bg.mp4#t=0.1`} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoHero;