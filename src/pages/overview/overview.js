import React from 'react';
import styles from './overview.module.css';
import logo from '../../assets/logos/TDF_logo.png';
import OverviewCard from '../../components/overviewCard/overviewCard';

const array = Array.from(Array(21).keys());

function OverviewPage() {
    console.log(array);
    return (
        <div className={styles.background}>
            <img className={styles.logo} src={logo} alt='TDF Logo' />
            <div className={styles.container}>
                <h1 className={styles.headline}>Overview 2023</h1>
                <div className={styles.grid}>
                    <div className={styles.stageWins}>
                        <h2>Stages winners</h2>
                        <div className={styles.flex}>
                            {array.map((key) => {
                                return (
                                    <div className={styles.result}>
                                        <h3>Stage {key}</h3>
                                        <span>1. Jonas Vingegaard</span>
                                        <span>2. Jonas Vingegaard</span>
                                        <span>3. Jonas Vingegaard</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.wins}>
                        <h2>Most Wins</h2>
                        <ol>
                            <li>Wout Van Aeart - 4</li>
                            <li>Wout Van Aeart - 3</li>
                            <li>Wout Van Aeart - 2</li>
                            <li>Wout Van Aeart - 2</li>
                            <li>Wout Van Aeart - 1</li>
                            <li>Wout Van Aeart - 1</li>
                        </ol>
                    </div>

                    <div className={styles.yellow}>
                        <OverviewCard rider={'Jonas Vingegaard'} result={'41:30:22'} type={'yellow'} />
                    </div>
                    <div className={styles.green}>
                        <OverviewCard rider={'Jonas Vingegaard'} result={'41:30:22'} type={'green'} />
                    </div>
                    <div className={styles.polka}>
                        <OverviewCard rider={'Jonas Vingegaard'} result={'41:30:22'} type={'polka'} />
                    </div>
                    <div className={styles.youth}>
                        <OverviewCard rider={'Jonas Vingegaard'} result={'41:30:22'} type={'youth'} />
                    </div>
                    <div className={styles.team}>
                        <OverviewCard rider={'Jonas Vingegaard'} result={'41:30:22'} type={'team'} />
                    </div>
                    <div className={styles.combativity}>
                        <OverviewCard rider={'Jonas Vingegaard'} type={'fighter'} />
                    </div>
                    <div className={styles.gap}>
                        <h2>The Gap</h2>
                        <p>Mikkel Bjerg (50:50:50) - Jonas Vingegaard (41:30:22)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage;