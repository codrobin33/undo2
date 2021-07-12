import { useEffect, useMemo, useState } from 'react';
import { useVisible } from 'react-hooks-visible'

const RadialChart = ({ radius = 60,
    progress = 0,
    strokeWidth = 15,
    dimension = 180,
    color = '#6B7280'
}) => {
    const [strokeLength, setStrokeLength] = useState(0);
    const [targetRef, visible] = useVisible()

    const circleRadius = useMemo(() => Math.min(radius, 85), [radius]);
    const circumference = useMemo(() => 2 * 3.14 * circleRadius, [circleRadius]);

    useEffect(() => {
        if (!visible) return setStrokeLength(0);

        // trying to do animation
        setStrokeLength(circumference / 100 * progress)
    }, [visible, circumference, progress]);

    return (
        <div className={'radial-chart'} ref={targetRef}>
            <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
                <circle
                    className="radial-chart-total"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    cx="90"
                    cy="90"
                    r={circleRadius}
                />
                <circle
                    className="radial-chart-progress"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${strokeLength},${circumference}`}
                    strokeLinecap="round"
                    fill="none"
                    cx="90"
                    cy="90"
                    r={circleRadius}
                />
                <text className="radial-text" x="50%" y="50%" textAnchor="middle" strokeWidth="2px" dy=".3em">{progress}%</text>
            </svg>
        </div>
    );
}

export default RadialChart;