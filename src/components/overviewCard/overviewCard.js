import React from 'react';
import styles from './overviewCard.module.css';
import { fetchRaceImages } from '../../utility/dataFetch';
import { getJerseyByType } from '../../utility/resultsTypes';
import { getResultsClass } from '../../utility/styles';

function OverviewCard({ rider, team, result, type, year }) {
    return (
        <div className={styles.card}>
            <div className={`${styles.jerseyHeader} ${getResultsClass(type, false)} TDF-${year}`}>
                <img className={type !== 'team' && type !== 'fighter' ? styles.jersey : ''} src={fetchRaceImages(year, getJerseyByType(type))} alt={`${type} jersey`} />
                {type === "polka" && <div>
                    <div className={`${styles.polkaDot} ${styles.dotPosOne}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosTwo}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosThree}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosFour}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosFive}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosSix}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosSeven}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosEight}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosNine}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosTen}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosEleven}`}></div>
                    <div className={`${styles.polkaDot} ${styles.dotPosTwelve}`}></div>
                </div>}
            </div>
            <div className={styles.result}>
                <p className={styles.winner}>{rider}</p>
                <span>{team}</span>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default OverviewCard;