import React from "react";
import styles from './overviewTable.module.css';

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

function OverviewTable({ riders, type, isTime }) {
  return (
    <div>
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
      <div className={styles.gridContentBody}>
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
            {riders.map((rider, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  {type !== 'team' && <td>{rider.name}</td>}
                  <td className={styles.tableTeam}>
                    {type === 'team' && <img src={require(`../../assets/teams/logos/${rider.team}.jpg`)} alt={rider.team} className={styles.teamLogo} />}
                    {type !== 'team' && <img src={require(`../../assets/teams/jerseys/${rider.team}.png`)} alt={rider.team} className={styles.jersey} />}
                  </td>
                  <td>{isTime ? rider.time : rider.point}</td>
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