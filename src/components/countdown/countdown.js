import React, { useEffect, useState } from "react";
import styles from './countdown.module.css';

const CountDown = ({raceStartDate}) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(raceStartDate));

    useEffect(() => {
        const timeLeft = calculateTimeLeft(raceStartDate);
        if(timeLeft === null) return;
        
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(raceStartDate))
        }, 1000);

        return () => clearInterval(timer);
    }, [raceStartDate]);

    return timeLeft && timeLeft.minutes > 0 && (
        <div className={styles.countDown}>
            <span>{timeLeft.days > 0 && <>{timeLeft.days} days,</>} {timeLeft.hours > 0 && <>{timeLeft.hours} hours,</>} {timeLeft.minutes} minutes</span>
        </div>
    )
}

function calculateTimeLeft(raceStartDate) {
    const difference = raceStartDate.getTime() - new Date().getTime();

    if(difference <= 0) {
        return null;
    }

    const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60  * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / (1000 * 60) % 60),
        seconds: Math.floor(difference / (1000) % 60),
    }
    
    return timeLeft
}

export default CountDown;