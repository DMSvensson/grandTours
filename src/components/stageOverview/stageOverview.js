import React from "react";
import styles from './stageOverview.module.css';

import logo from '../../assets/logos/TDF_logo.png';

function StageOverview() {
    return (
        <div className={styles.overviewContainer}>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt='TDF Logo' />
            <h1>STAGE 7</h1>
            <span>2022</span>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.stageResults}>
              <div className={`${styles.gridContentHeader} ${styles.winnerBg}`}>
                <h2>Stage results</h2>
              </div>
              <hr />
              <div className={styles.gridContentBody}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope='col'>Position</th>
                      <th scope='col'>Rider</th>
                      <th scope='col'>Team</th>
                      <th scope='col'>Time</th>
                    </tr>
                  </thead>
                  <tbody className={styles.bodyStageResults}>
                    <tr>
                      <td>1</td>
                      <td>Pogacar Tadej</td>
                      <td className={styles.tableTeam}>
                        <img src={require('./teams/jerseys/UAE_Jersey.png')} alt='' className={styles.teamLogo}/>
                      </td>
                      <td>3:58:40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.yellowJersey}>
              <div className={`${styles.gridContentHeader} ${styles.yellowBg}`}>
                <img className={styles.jersey} src={require('./jerseys/yellow_jersey.png')} alt='Yellow jersey'/>
              </div>
              <hr />
              <div className={styles.gridContentBody}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope='col'>Position</th>
                      <th scope='col'>Rider</th>
                      <th scope='col'>Team</th>
                      <th scope='col'>Time</th>
                    </tr>
                  </thead>
                  <tbody className={styles.bodyStageResults}>
                    <tr>
                      <td>1</td>
                      <td>Pogacar Tadej</td>
                      <td className={styles.tableTeam}>
                      <img src={require('./teams/jerseys/UAE_Jersey.png')} alt='' className={styles.teamLogo}/>
                      </td>
                      <td>3:58:40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='green-jersey'></div>
            <div className='mountain-jersey'></div>
            <div className='youth-jersey'></div>
            <div className='team'></div>
            <div className='fighter'></div>
          </div>
        </div>
    );
}

export default StageOverview;