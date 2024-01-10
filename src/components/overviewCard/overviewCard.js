import React from 'react';
import styles from './overviewCard.module.css';
import { fetchRaceImages } from '../../utility/dataFetch';

const resultsTypes = {
    "yellow": "yellow_jersey",
    "green": "green_jersey",
    "polka": "polka_jersey",
    "youth": "youth_jersey",
    "team": "best_team",
    "fighter": "fighter",
};

const getJerseyByType = (resultType) => {
    return resultsTypes[resultType];
};

const getResultsClass = (resultType) => {
    if (resultType === 'yellow') {
        return styles.yellowBg;
    } else if (resultType === 'green') {
        return styles.greenBg;
    } else if (resultType === 'polka') {
        return styles.polkaBg;
    } else if (resultType === 'youth') {
        return styles.whiteBg;
    } else if (resultType === 'team') {
        return styles.bestTeam;
    } else if (resultType === 'fighter') {
        return styles.fighter;
    }
};

function OverviewCard({ rider, result, type }) {
    return (
        <div className={styles.card}>
            <div className={`${styles.jerseyHeader} ${getResultsClass(type)}`}>
                <img className={type !== 'team' && type !== 'fighter' ? styles.jersey : ''} src={fetchRaceImages(2023, getJerseyByType(type))} alt={`jersey`} />
            </div>
            <div className={styles.result}>
                <p className={styles.winner}>{rider}</p>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default OverviewCard;