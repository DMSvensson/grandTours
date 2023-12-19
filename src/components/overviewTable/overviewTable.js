import React from "react";
import styles from './overviewTable.module.css';
import useToggleScrollBehaviorByMouse from "../../utility/toggleScrollBeavhior";

const resultsTypes = {
  "stage_results": "Stage results",
  "yellow": "yellow_jersey.png",
  "green": "green_jersey.png",
  "polka": "polka_jersey.png",
  "youth": "youth_jersey.png",
  "team": "best_team.png",
};

const getHeaderByType = (resultType) => {
  return resultsTypes[resultType];
};

const getResultsClass = (resultType) => {
  if (resultType === 'stage_results') {
    return styles.winnerBg;
  } else if (resultType === 'yellow') {
    return styles.yellowBg;
  } else if (resultType === 'green') {
    return styles.greenBg;
  } else if (resultType === 'polka') {
    return styles.polkaBg;
  } else if (resultType === 'youth') {
    return styles.whiteBg;
  } else if (resultType === 'team') {
    return styles.bestTeam;
  }
};

const getGridClass = (resultType) => {
  if (resultType === 'stage_results') {
    return styles.stageResults;
  } else if (resultType === 'yellow') {
    return styles.yellowJersey;
  } else if (resultType === 'green') {
    return styles.greenJersey;
  } else if (resultType === 'polka') {
    return styles.polkaJersey;
  } else if (resultType === 'youth') {
    return styles.youngJersey;
  } else if (resultType === 'team') {
    return styles.team;
  }
};

function OverviewTable({ results, type, isTime }) {
  const {handleMouseEnter, handleMouseLeave} = useToggleScrollBehaviorByMouse();
  return (
    <div className={getGridClass(type)}>
      <div className={`${styles.gridContentHeader} ${getResultsClass(type)}`}>
        {type !== "stage_results" && <img className={type !== 'team' ? styles.jersey : ''} src={require(`../../assets/jerseys/${getHeaderByType(type)}`)} alt={`${type} jersey`} />}
        {type === "stage_results" && <h2>{getHeaderByType(type)}</h2>}
        {type === "team" && <h2>Team classification</h2>}
        {type === "polka" && <div>
          <div className={`${styles.polkaDot} ${styles.dotPosOne}`}></div>
          <div className={`${styles.polkaDot} ${styles.dotPosTwo}`}></div>
          <div className={`${styles.polkaDot} ${styles.dotPosThree}`}></div>
          <div className={`${styles.polkaDot} ${styles.dotPosFour}`}></div>
          <div className={`${styles.polkaDot} ${styles.dotPosFive}`}></div>
          <div className={`${styles.polkaDot} ${styles.dotPosSix}`}></div>
          <div className={`${styles.polkaDot} ${styles.dotPosSeven}`}></div>
          <div className={`${styles.polkaDot} ${styles.dotPosEight}`}></div>
        </div>}
      </div>
      <hr />
      <div className={styles.gridContentBody} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope='col'>Position</th>
              {type !== 'team' && <th scope='col'>Rider</th>}
              <th scope='col'>Team</th>
              <th scope='col'>{isTime ? 'Time' : 'Points'}</th>
            </tr>
          </thead>
          <tbody className={type === "stage_results" ? styles.bodyStageResults : ''}>
            {results && results.map((result) => {
              return (
                <tr key={result.name}>
                  <td>{result.position}</td>
                  {type !== 'team' && <td>{result.name}</td>}
                  <td className={styles.tableTeam}>
                    {type === 'team' && <img src={require(`../../assets/teams/logos/${result.team}.jpg`)} alt={result.team} className={styles.teamLogo} />}
                    {type !== 'team' && type && <img src={require(`../../assets/teams/jerseys/${result.team}.png`)} alt={result.team} className={styles.jersey} />}
                  </td>
                  <td>{isTime ? result.time : result.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OverviewTable;