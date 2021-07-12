
const TattooHeader = () => {

    return (
        <div class="video-container">
            <video autoPlay="" loop="" preload="auto" id="myVideo">
                <source src="/video/pico_bg.mp4" type="video/mp4" />
                <p>Your browser doesn't support HTML5 video. Here is a <a href="/video/pico_bg.mp4">link to the video</a> instead.</p>
            </video>
            <div class="video-overlay">
                <span class="icon">
                    <svg class="svg-inline--fa fa-pause fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path>
                    </svg>
                    <i class="fas fa-pause"></i>
                </span>
            </div>
        </div>
    )
}

export default TattooHeader;