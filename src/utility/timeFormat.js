 /**
 * Formats a total number of seconds into an H:MM:SS string.
 * This function is used to display a rider's total time.
 * For example, 945 seconds becomes "0:15:45".
 * @param {number} totalSeconds The time in seconds.
 * @returns {string | null} The formatted time string or status.
 */
function formatTime(totalSeconds) {    
    if (isNaN(totalSeconds) || totalSeconds < 0) {
        return null;
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Calculates and formats the time difference behind the leader.
 * The format changes based on the length of the time difference.
 * For example, a 14-second difference becomes "0:14". A 90-second difference becomes "1:30".
 * @param {number} riderTimeSeconds The rider's total time in seconds.
 * @param {number} leaderTimeSeconds The leader's total time in seconds.
 * @param {string} status The rider's status (e.g., 'Finished', 'DNF').
 * @returns {string} The formatted time behind string or status.
 */
function formatTimeBehind(riderTimeSeconds, leaderTimeSeconds, status) {
    if (status && (status === 'DNF' || status === 'DNS')) {
        return status;
    }

    const timeDifference = riderTimeSeconds - leaderTimeSeconds;

    if (timeDifference < 0 || typeof timeDifference !== 'number') {
        return "Invalid difference";
    }

    if (timeDifference === 0) {
        return "0:00";
    }

    const hours = Math.floor(timeDifference / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = Math.floor(timeDifference % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    if (hours > 0) {
        return `${hours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}

export {
    formatTime, 
    formatTimeBehind
}