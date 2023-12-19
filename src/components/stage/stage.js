import React from "react";
import styles from './stage.module.css';
import KeyPoint from "../keyPoint/keyPoint";

function Stage({stage, boxRef}) {
    return (
    <div className={styles.stageContainer}>
        <div className={styles.stageInfo}>
            <h1>Stage {stage.stage_number}</h1>
            <h2>{stage.route}</h2>
            <p>{stage.date}</p>
        </div>
        <img className={styles.stage} alt={`stage ${stage.id}`} src={require(`./stages/${stage.stage_img}`)}/>
        <div className={styles.stageKeyPoints}>
            <div className={styles.distance}>
                <span>0 km</span>
                <div className={styles.line}></div>
                <span>{`${stage.length} km`}</span>
            </div>
            {stage.keyPoints.map((keyPoint) => {
                return (
                    <KeyPoint boxRef={boxRef} keyPoint={keyPoint} stageKm={stage.length} key={keyPoint.name}/>
                );
            })}
            
        </div>
    </div>
    );
}

export default Stage;