import React, { useEffect, useState } from "react";
import styles from './startList.module.css';
import { fetchData, fetchTeamsImages } from "../../utility/dataFetch";
import { Link, useParams } from "react-router-dom";
import RaceLogo from "../../components/raceLogo/raceLogo";

function StartListPage() {
    const params = useParams();
    const [data, setData] = useState(null);
    const [loadingText, setLoadingText] = useState(null);

    const handleDataChange = (data) => {
        setData(data);
    };
    useEffect(() => {
        setLoadingText('Loading...');

        const loadingTimeout = setTimeout(() => {
            setLoadingText('The teams are coming, they are properly warming up...');
        }, 5000);

        fetchData(`teams/${params.year}`).then(teams => {
            handleDataChange(teams);
        }).catch(error => {
            clearTimeout(loadingTimeout);
            setLoadingText('Could not get the data right now');
        });
    }, [params]);

    const isLoading = data === null;
    const teams = isLoading ? loadingText : data;
    return (
        <div className={styles.background}>
            <RaceLogo />
            <div className={styles.teamsContainer}>
                <div className={styles.info}>
                    <h1>Tour de France {params.year}</h1>
                    <div>
                        <p>Scroll through all 21 stages of Tour de France {params.year} to get a recap of every stage. For the best experience please use the website on a desktop or laptop.</p>
                        <p>To stay updated on all the exciting moments, route details, and results of the Tour de France
                            please visit the official website of the Tour de France: <a href="https://www.letour.fr/en/" target="blank">Tour de France Official Website</a></p>
                    </div>
                </div>
                {teams && teams.length > 0 && !isLoading && <div className={styles.center}>
                    <Link to={`/stages/${params.year}`} className={`btn btn-primary btn-large ${styles.spacing}`} >Go to stages</Link>
                    <Link to={`/overview/${params.year}`} className={`btn btn-secondary btn-large ${styles.spacing}`} >Skip to overall Overview</Link>
                </div>}
                <h2>Teams & Riders</h2>
                <div className={styles.teams}>
                    {isLoading && <div>{loadingText}</div>}
                    {!isLoading && teams && teams.map((team) => {
                        return (
                            <div className={styles.team} key={team.name}>
                                <img src={fetchTeamsImages(params.year, 'jersey', team.name)} alt={team.name} />
                                <p>{team.name}</p>
                                <ul>
                                    {team.riders.map((rider) => {
                                        return <li key={rider}>{rider}</li>
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default StartListPage;