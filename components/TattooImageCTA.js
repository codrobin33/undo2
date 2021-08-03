import React from 'react';
import TimelyBookButton from './TimelyBookButton';

const TattooImageCTA = () => (
    <div className="is-parallax background-img" style={{ marginTop: '0' }}>
        <div className="w-full has-dot-overlay">
            <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <div className="mt-4 text-3xl tracking-normal leading-8 text-gray-50 opacity-90">
                    At <b>Undo, Skin care Center</b>, we use only the best and most advanced technology to make the tattoo removal process easy and painless!
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <TimelyBookButton reversed>
                            Book now
                        </TimelyBookButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TattooImageCTA;