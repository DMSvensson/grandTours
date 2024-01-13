import React, { useEffect, useState } from 'react';
import styles from './overview.module.css';
import OverviewCard from '../../components/overviewCard/overviewCard';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../../utility/dataFetch';
import RaceLogo from '../../components/raceLogo/raceLogo';
import { getGridClass } from '../../utility/styles';

function OverviewPage() {
    const params = useParams();
    const year = params.year;
    const [data, setData] = useState(null);
    const [loadingText, setLoadingText] = useState(null);

    const handleDataChange = (data) => {
        setData(data);
    };
    useEffect(() => {
        setLoadingText('Loading...');

        fetchData(`overview/${year}`).then(overview => {
            handleDataChange(overview);
        }).catch(error => {
            setLoadingText('Could not get the data right now');
        });
    }, [year]);
    const isLoading = data === null;
    const overview = isLoading ? loadingText : data;
    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <RaceLogo />
                <Link to={`/teams/${year}`} className='btn btn-primary'>Go back to {year}</Link>
            </div>
            <div className={styles.container}>
                <h1 className={styles.headline}>Overview {year}</h1>
                {isLoading && <div>{loadingText}</div>}
                {!isLoading && <div className={styles.grid}>
                    <div className={styles.stageWins}>
                        <h2>Stage Winners</h2>
                        <div className={styles.flex}>
                            {overview && overview.stageWinners.map((stage) => {
                                return (
                                    <div className={styles.result} key={stage.stageNumber}>
                                        <h3>Stage {stage.stageNumber}</h3>
                                        {stage.results && stage.results.map((result, index) => {
                                            return (
                                                <span key={index}>{result.position}. {result.rider}</span>
                                            )
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.wins}>
                        <h2>Most Wins</h2>
                        <ol>
                            {overview && overview.mostWins.map(winResult => {
                                return <li key={winResult.name}>{winResult.name} - {winResult.wins}</li>
                            })}
                        </ol>
                    </div>
                    {overview && overview.overallWinners.map(winner => {
                        return (
                            <div className={getGridClass(winner.type, styles)} key={winner.type}>
                                <OverviewCard rider={winner.rider == null ? winner.team_time : winner.rider} team={winner.team} result={winner.points == null ? winner.time : winner.points} type={winner.type} year={year} />
                            </div>
                        )
                    })}
                    <div className={styles.gap}>
                        <h2>The Gap</h2>
                        {overview &&
                            <>
                                <p>{overview.gap.firstRider.rider} ({overview.gap.firstRider.time})</p>
                                <p>.</p>
                                <p>({overview.gap.gap})</p>
                                <p>.</p>
                                <p>{overview.gap.lastRider.rider} ({overview.gap.lastRider.time})</p>
                            </>
                        }
                    </div>
                    <div className={styles.totalLength}>
                        <h2>Total length</h2>
                        <p>{overview && overview.totalLength.toFixed(2)} km</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default OverviewPage;