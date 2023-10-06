import React from "react";
import styles from './stageOverview.module.css';

import logo from '../../assets/logos/TDF_logo.png';
import OverviewTable from "../overviewTable/overviewTable";

function StageOverview({results, stageNumber}) {
    return (
        <div className={styles.overviewContainer}>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt='TDF Logo' />
            <h1>STAGE {stageNumber}</h1>
            <span>2022</span>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.stageResults}>
              <OverviewTable riders={results.stageResults.results} type={results.stageResults.type} isTime={results.stageResults.isTime} key={results.stageResults.id}/>
            </div>
            <div className={styles.yellowJersey}>
              <OverviewTable riders={results.yellow.results} type={results.yellow.type} isTime={results.yellow.isTime} key={results.yellow.id}/>
            </div>
            <div className={styles.greenJersey}>
              <OverviewTable riders={results.green.results} type={results.green.type} isTime={results.green.isTime} key={results.green.id}/>
            </div>
            <div className={styles.mountainJersey}>
              <OverviewTable riders={results.polka.results} type={results.polka.type} isTime={results.polka.isTime} key={results.polka.id}/>
            </div>
            <div className={styles.youthJersey}>
              <OverviewTable riders={results.youth.results} type={results.youth.type} isTime={results.youth.isTime} key={results.youth.id}/>
            </div>
            <div className={styles.team}>
              <OverviewTable riders={results.teams.results} type={results.teams.type} isTime={results.teams.isTime} key={results.teams.id}/>
            </div>
            <div className={styles.fighter}>
              <img src={require('../../assets/jerseys/fighter.png')} alt="Fighter" />
              <h1>{results.combativity}</h1>
              <p>Combativity award</p>
            </div>
          </div>
        </div>
    );
}

export default StageOverview;