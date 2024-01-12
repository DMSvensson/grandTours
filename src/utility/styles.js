import styles from '../assets/styles/jersery.module.css';
import { resultsTypes } from './resultsTypes';

const getResultsClass = (type, isOverview) => {
    switch(type) {
        case resultsTypes.stageResults:
            return styles.winnerBg;
        case resultsTypes.yellow:
            return styles.yellowBg;
        case resultsTypes.green:
            return styles.greenBg;
        case resultsTypes.polka:
            return styles.polkaBg;
        case resultsTypes.youth:
            return styles.whiteBg;
        case resultsTypes.team:
            if(isOverview) return styles.bestTeamOverview;
            return styles.bestTeam;
        case resultsTypes.fighter:
            return styles.fighter;
        default:
            break;
    }
};

const getGridClass = (type, styles) => {
    switch(type) {
        case resultsTypes.stageResults:
            return styles.stageResults;
        case resultsTypes.yellow:
            return styles.yellowJersey;
        case resultsTypes.green:
            return styles.greenJersey;
        case resultsTypes.polka:
            return styles.polkaJersey;
        case resultsTypes.youth:
            return styles.youngJersey;
        case resultsTypes.team:
            return styles.team;
        default:
            break;
    }
  };

export {
    getResultsClass,
    getGridClass
}