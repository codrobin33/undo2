import React, { useCallback, useEffect, useMemo, useState } from 'react';

const TimelyBookButton = ({ size = 'base', ...props }) => {

    const [_timely, setTimely] = useState(null);

    useEffect(() => {
        setTimely(new window.timelyButton("undolaserskincareclinic", { 'dontCreateButton': true }));
    }, []);

    //if (!_timely) return null;

    const event = useCallback(() => {
        // fire the event then do the navigation.
        window.dataLayer.push({ 'event': 'book_now' });
        _timely.start();
    });

    const cssSize = useMemo(() => {
        switch (size) {
            case 'small':
                return 'px-4 py-2 ';
            case 'base':
                return 'px-8 py-3 md:py-4 md:text-lg md:px-10';
            case 'large':
                return 'px-16 py-4 md:py-5 md:text-2xl md:px-18';
        }
    }, [size])

    return (
        <div className={props.container || ''}>
            <a
                className={`w-full flex items-center justify-center ${cssSize} border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  cursor-pointer timely`}
                {...props}
                onClick={event}>
                Book now
            </a>
        </div>
    );
}

export default TimelyBookButton;