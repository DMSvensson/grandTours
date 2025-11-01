import React from "react";
import styles from './home.module.css';
import { Link } from "react-router-dom";
import ITT from '../../assets/icons/ITT.svg';
import flat from '../../assets/icons/flat.svg';
import hilly from '../../assets/icons/hilly.svg';
import mountain from '../../assets/icons/mountain.svg';
import camera from '../../assets/icons/camera.svg';
import RaceLogo from "../../components/raceLogo/raceLogo";
import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../utility/dataFetch";



function HomePage() {
    const [races, setRaces] = useState([]);
    const [loadingText, setLoadingText] = useState('Loading...');

    useEffect(() => {        
        fetchData('races').then(races => {
            setRaces(races)
        }).catch(error => {
            setLoadingText('Ups something went wrong. Working on it')
        });
    }, []);

    const isLoading = races === null;

    return (
        <div className={styles.background}>
            <RaceLogo />
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>Experience Tour de France by Scrolling</h1>
                    <div>
                        <p>Select a Tour de France and scroll through all 21 stages to get a recap of every stage. For the best experience please use the website on a desktop or laptop.</p>
                        <p>To stay updated on all the exciting moments, route details, and results of the Tour de France
                            please visit the official website of the Tour de France: <a href="https://www.letour.fr/en/" target="blank">Tour de France Official Website</a></p>
                    </div>
                </div>
                <div className={styles.editions}>
                    {isLoading && <p>{loadingText}</p>}
                    { 
                     !isLoading && races && races.map((race) => {
                            return (
                                <div key={race.year} className={`${styles.editionBackground}`} style={{backgroundImage: `url(https://grandtourstorage.blob.core.windows.net/tdf/cover/TDF_Cover_${race.year}.jpg)`}}>
                                    <Link to={`${race.year}`}>
                                        <div className={styles.edition} >
                                            <div>
                                                <h3>Tour de France {race.year}</h3>
                                                <span>{race.startCity} - {race.endCity}</span>
                                                <p>Edition {race.edition}</p>
                                            </div>
                                            {
                                                race.flat > 0 &&
                                                race.hilly > 0 &&
                                                race.mountain > 0 &&
                                                <div className={styles.stageTypes}>
                                                    <div>
                                                        <span>{race.flat}</span>
                                                        <img className={styles.icon} src={flat} alt="Flat" />
                                                    </div>
                                                    <div>
                                                        <span>{race.hilly}</span>
                                                        <img className={styles.icon} src={hilly} alt="Hilly" />
                                                    </div>
                                                    <div>
                                                        <span>{race.mountain}</span>
                                                        <img className={styles.icon} src={mountain} alt="Mountain" />
                                                    </div>
                                                    {
                                                        race.itt > 0 &&
                                                        <div>
                                                            <span>{race.itt}</span>
                                                            <img className={styles.icon} src={ITT} alt="ITT" />
                                                        </div>
                                                    }
                                                    {
                                                        race.ttt > 0 &&
                                                        <div>
                                                            <span>{race.ttt}</span>
                                                            <img className={styles.icon} src={ITT} alt="ITT" />
                                                        </div>
                                                    }
                                                </div>
                                            }
                                            
                                        </div>
                                    </Link>
                                    <div className={styles.credit}>
                                        <img src={camera} alt="Credit" />{race.imageCredit}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;