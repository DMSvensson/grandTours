import React from "react";
import styles from './overviewTable.module.css';
import useToggleScrollBehaviorByMouse from "../../hooks/useToggleScrollBeavhior";
import { fetchTeamsImages, fetchRaceImages } from "../../utility/dataFetch";
import {getJerseyByType} from "../../utility/resultsTypes";
import { getResultsClass, getGridClass } from "../../utility/styles";
import { formatTime, formatTimeBehind } from "../../utility/timeFormat"

function OverviewTable({ results, leadersTime, type, isTime, year }) {  
  const {handleMouseEnter, handleMouseLeave} = useToggleScrollBehaviorByMouse();
  let positionOffeset = 0;
  return (
    <div className={getGridClass(type, styles)}>
      <div className={`${styles.gridContentHeader} ${getResultsClass(type, true)} TDF-${year}`}>
        {type !== "stage_results" && <img className={type !== 'team' ? styles.jersey : ''} src={fetchRaceImages(year, getJerseyByType(type))} alt={`${type} jersey`} />}
        {type === "stage_results" && <h2>{getJerseyByType(type)}</h2>}
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
            {results && results.map((result, index) => {
              if(result.isDisqualified) {
                positionOffeset++;
              }
              let position;
              if (result.status === "OTL") {
                position = "OTL"
              } else {
                position = result.isDisqualified ? "DSQ" : result.position ? result.position - positionOffeset : index + 1 - positionOffeset;
              }
              return (
                <tr key={position}>
                  <td>{position}</td>
                  {type !== 'team' && <td>{result.rider}</td>}
                  <td className={styles.tableTeam}>
                    {type === 'team' && <img src={fetchTeamsImages(year, 'logo', result.team_name)} alt={result.team} className={styles.teamLogo} />}
                    {type !== 'team' && type && <img src={fetchTeamsImages(year, 'jersey', result.team)} alt={result.team} className={styles.jersey} />}
                  </td>
                  {position === 1 && <td>{isTime ? formatTime(result.time) : result.points}</td>}
                  {position !== 1 && <td>{isTime ? formatTimeBehind(result.time, leadersTime, result.status) : result.points}</td>}
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