import React, { useState } from "react";
import styles from './stage.module.css';
import KeyPoint from "../keyPoint/keyPoint";
import { fetchStageImages } from "../../utility/dataFetch";

const numbers = Array.from({ length: 21 }, (_, i) => i + 1);
function Stage({ stage, year, handleSelectedStage }) {
    const [hideStages, setHideStages] = useState(true);
    const handleHideStages = () => {
        setHideStages((prev) => !prev);
    }

    const handleStageNumber = ({target}) => {
        handleSelectedStage(target.innerText);
    }

    return (
        <div className={styles.stageContainer}>
            <div className={styles.stageInfo}>
                <div>
                    <h1>Stage {stage.stage_number}</h1>
                    <div className={`${hideStages ? `${styles.right}` : `${styles.left}`} ${styles.arrow}`} onClick={handleHideStages}></div>
                    <div className={`${hideStages ? `${styles.hidden}` : ''} ${styles.box}`}>
                        {numbers.map((number, index) => (
                            <span key={index} onClick={handleStageNumber}>{number}</span>
                        ))}
                    </div>
                </div>
                <h2 className="font-family-jose">{stage.start_city} {'>'} {stage.end_city}</h2>
                <p className="font-family-jose">{stage.date}</p>
            </div>
            <div className={styles.stage}>
                <div className={styles.stageWhiteTop}></div>
                <img className={styles.stageImage} alt={`stage ${stage.id}`} src={fetchStageImages(year, stage.stage_img)} />
            </div>
            <div className={styles.stageKeyPoints}>
                <div className={styles.distance}>
                    <span>0 km</span>
                    <div className={styles.line}></div>
                    <span>{`${stage.distance_km} km`}</span>
                </div>
                {stage.keyPoints.map((keyPoint, index) => {
                    return (
                        <KeyPoint keyPoint={keyPoint} stageKm={stage.distance_km} key={index} />
                    );
                })}

            </div>
        </div>
    );
}

export default Stage;