

const Map = () => {
    return (
        <div className="relative h-96">
            <iframe
                title="Map"
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.366592308801!2d-94.71686598386272!3d39.21183913595133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f5444bc101e3%3A0xf4f32508c4786c5a!2s6442%20NW%20Crooked%20Rd%2C%20Parkville%2C%20MO%2064152!5e0!3m2!1sen!2sus!4v1579745813644!5m2!1sen!2sus"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
            />
        </div>
    );
};

export default Map;