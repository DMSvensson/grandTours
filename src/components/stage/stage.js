import React from "react";
import styles from './stage.module.css';
import stage from '../../assets/stages/stage7.png'

function Stage() {
    return (
    <div className={styles.stageContainer}>
        <div className={styles.stageInfo}>
            <h1>Stage 7</h1>
            <h2>Tomblaine - La Super Planche des Belles Filles</h2>
            <p>08 July 2022</p>
        </div>
        <img className={styles.stage} alt="stage7" src={stage}/>
        <div className={styles.stageKeyPoints}>
            <div className={styles.distance}>
                <span>0 km</span>
                <div className={styles.line}></div>
                <span>176.3km</span>
            </div>
            <div className={`${styles.keyPoints} ${styles.sprint} ${styles.short}`}>
                <div className={`${styles.flag} ${styles.left}`}>
                    <span>S</span>
                    <div className={styles.keyPointInfo}>
                        <h3>Gerardmer</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Stage;