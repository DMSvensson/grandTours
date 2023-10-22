import React, { useEffect, useState } from "react";
import styles from './startList.module.css';
import logo from '../../assets/logos/TDF_logo.png';
import { getJsonData } from "../../utility/dataFetch";
import { Link } from "react-router-dom";

function StartListPage() {
    const [data, setData] = useState(null);

    const handleDataChange = (data) => {
        setData(data);
    };

    useEffect(() => {
        getJsonData('/teams.json').then((json) => {
            handleDataChange(json);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const isLoading = data === null;
    const teams = isLoading ? 'Loading...' : data.teams;
    return (
        <div className={styles.background}>
            <img className={styles.logo} src={logo} alt='TDF Logo' />
            <div className={styles.teamsContainer}>
                <div className={styles.info}>
                    <h1>Experience Tour de France 2022 by Scrolling</h1>
                    <div>
                        <p>Scroll through all 21 stages of Tour de France 2022 to get a recap of every stage. For the best experience please use the website on a desktop or laptop</p>
                        <p>To stay updated on all the exciting moments, route details, and results of the Tour de France
                            please visit the official website of the Tour de France: <a href="https://www.letour.fr/en/" target="blank">Tour de France Official Website</a></p>
                    </div>
                </div>
                <Link to={`stages`} className={`btn btn-large ${styles.center}`}>Go to stages</Link>
                <h2>Teams & Riders</h2>
                <div className={styles.teams}>
                    {!isLoading && teams.map((team) => {
                        return (
                            <div className={styles.team} key={team.name}>
                                <img src={require(`../../assets/teams/jerseys/${team.name}.png`)} alt={team.name} />
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