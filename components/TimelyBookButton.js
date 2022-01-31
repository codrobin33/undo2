import React, { useCallback, useEffect, useMemo, useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TimelyBookButton = ({ size = 'base', reversed = false, ...props }) => {

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
                className={classNames(
                    `undo-link w-full flex items-center justify-center ${cssSize} border-2 border-transparent text-base font-medium rounded-md   cursor-pointer timely`,
                    (!reversed) && 'text-white bg-indigo-600 hover:bg-indigo-700',
                    (reversed) && 'text-indigo-600 bg-white hover:bg-gray-50'
                )}
                {...props}
                onClick={event}>
                Book&nbsp;now
            </a>
        </div>
    );
}

export default TimelyBookButton;