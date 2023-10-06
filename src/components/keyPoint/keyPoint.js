import React from "react";
import styles from './keyPoint.module.css';
import WinnerTable from "../winnerTable/winnerTable";
import { useRef } from 'react';
import useHasPassedDetection from "../../hooks/hasPassedDetection";

const getTypeClass = (type) => {
    if(type === 'sprint') {
        return styles.sprint;
    } else if(type === 'mountain') {
        return styles.mountain;
    } else if(type === 'finish') {
        return styles.finish;
    }
    return "";
}

const getLengthClass = (length) => {
    if(length === 'short') {
        return styles.short;
    } else if(length === 'medimum') {
        return styles.medimum;
    } else if(length === 'long') {
        return styles.long;
    } else {
        return styles.extraLong;
    }
}

const calculatePosition = (keyPointKm, stageKm, type) => {
    if(keyPointKm === stageKm && type === 'mountain') {
        keyPointKm -= 0.6;
    } else if(keyPointKm === stageKm) {
        keyPointKm -= 0.2;
    }
    return keyPointKm/stageKm * 100;
}

function KeyPoint({keyPoint, stageKm, boxRef}) {
    const element2Ref = useRef(null);
    return (
        <div ref={element2Ref} className={`${styles.keyPoint} ${getTypeClass(keyPoint.type)} ${getLengthClass(keyPoint.keyPointLength)}`} style={{left: `${calculatePosition(keyPoint.km, stageKm, keyPoint.type)}%`}}>
            <div className={`${styles.flag} ${keyPoint.flagDirectionLeft ? styles.left : styles.right}`}>
                <span>{keyPoint.text}</span>
                <div className={`${styles.keyPointInfo} ${(keyPoint.km === stageKm && keyPoint.type !== "finish") ? styles.finishLine : ''}`} >
                    <h3>{keyPoint.name}</h3>
                    {keyPoint.type === 'mountain' && <div><p>{keyPoint.avgProcent}</p><p>{keyPoint.length}</p><p>{keyPoint.altitude}</p></div>}
                </div>
            </div>
            <WinnerTable hide={useHasPassedDetection(boxRef, element2Ref)} winners={keyPoint.results} type={keyPoint.type} flagDirectionLeft={keyPoint.flagDirectionLeft} key={keyPoint.name}/>
        </div>
    )
}

export default KeyPoint;