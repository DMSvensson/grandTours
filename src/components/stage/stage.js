import React from "react";
import styles from './stage.module.css';
import stage from '../../assets/stages/stage7.png';
import KeyPoint from "../keyPoint/keyPoint";

const stageLength = 176.6;

const _keyPoint = {
    name: 'Gérardmer',
    keyPointLength: 'short',
    flagDirectionLeft: true,
    text: 'S',
    km: 101,
    type: 'sprint',
    results: [
        {
            name: 'Mads P',
            team: 'Trek-Segafredo',
            points: 20
        },
        {
            name: 'Geschke Simon',
            team: 'Cofidis',
            points: 17
        }
    ]
}
const _keyPoint2 = {
    name: 'Col de la Grosse Pierre',
    keyPointLength: 'medimum',
    flagDirectionLeft: false,
    text: '3',
    km: 107,
    length: '3.1 km',
    avgProcent: '6.3%',
    altitude: '954km',
    type: 'mountain',
    results: [
        {
            name: 'Geschke Simon',
            team: 'Cofidis',
            points: 2
        },
        {
            name: 'Kamna Lennard',
            team: 'BORA - hansgrohe',
            points: 1
        }
    ]
}
const _keyPointfinish = {
    name: 'Finish',
    keyPointLength: 'extraLong',
    flagDirectionLeft: true,
    text: 'F',
    km: stageLength,
    type: 'finish',
    results: [
        {
            name: 'Pogačar Tadej',
            team: 'UAE Team Emirates',
            points: 30
        },
        {
            name: 'Vingegaard Jonas',
            team: 'Jumbo - Visma',
            points: 25
        }
    ]
}

const keyPoints = [_keyPoint, _keyPoint2, _keyPointfinish];

function Stage({boxRef}) {
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
                <span>{`${stageLength}km`}</span>
            </div>
            {keyPoints.map((keyPoint) => {
                return (
                    <KeyPoint boxRef={boxRef} keyPoint={keyPoint} stageKm={stageLength} key={keyPoint.name}/>
                );
            })}
            
        </div>
    </div>
    );
}

export default Stage;