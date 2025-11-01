import React from "react";
import styles from './stageOverview.module.css';

import logo from '../../assets/logos/TDF_logo.png';
import OverviewTable from "../overviewTable/overviewTable";
import { fetchRaceImages } from "../../utility/dataFetch";

function StageOverview({results: overview, combativity, stageNumber, year}) {
    return (
        <div className={styles.overviewContainer}>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt='TDF Logo' />
            <h1>STAGE {stageNumber}</h1>
            <span>{year}</span>
          </div>
          <div className={styles.gridContainer}>
            {overview.map(result => {
              return <OverviewTable results={result.results} leadersTime={result.results[0]?.time} type={result.type} isTime={result.isTime} year={year} key={result.type} />
            })}
            <div className={styles.fighter}>
              <img src={fetchRaceImages(year, 'fighter')} alt="Fighter" />
              <h1>{combativity}</h1>
              <p>Combativity award</p>
            </div>
          </div>
        </div>
    );
}

export default StageOverview;