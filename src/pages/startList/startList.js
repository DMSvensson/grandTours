import React, { useEffect, useState } from "react";
import styles from './startList.module.css';
import { fetchData } from "../../utility/dataFetch";
import { Link, useParams } from "react-router-dom";
import RaceLogo from "../../components/raceLogo/raceLogo";
import Tabs from "../../components/tabs/tabs";
import { tabContent } from "./tabContent";

function StartListPage() {
    const { year } = useParams();
    const [teamsAndRiders, setTeamAndRider] = useState(null);
    const [finishedStages, setFinishedStages] = useState([]);
    const [stages, setStages] = useState(null);
    const [isStagesClicked, setIsStagesClicked] = useState(false);
    const [teamLoadingText, setTeamLoadingText] = useState('');
    const [stagesLoadingText, setStagesLoadingText] = useState('');
    
    const handleTeamsAndRiders = (data) => {
        setTeamAndRider(data);
    };
    const handlFinishedStages = (data) => {
        setFinishedStages(data)
    }
    const handleStages = (data) => {
        setStages(data);
    };
    const handleIsStagesClicked = () => {
        setIsStagesClicked(true);
    }

    useEffect(() => {
        setTeamLoadingText('Loading...');

        const loadingTimeout = setTimeout(() => {
            setTeamLoadingText('The teams are coming, they are properly warming up...');
        }, 5000);

        fetchData(`teams/${year}`).then(teams => {
            handleTeamsAndRiders(teams);
            fetchData(`stages/finishedStages/${year}`).then(stages => {
                handlFinishedStages(stages);
            }).catch(error => {
                console.error(error);
            });
        }).catch(error => {
            clearTimeout(loadingTimeout);
            setTeamLoadingText('Could not get teams right now');
        });        
    }, [year]);

    useEffect(() => {
        if(!isStagesClicked) {
            return;
        }
        setStagesLoadingText('Loading...');
        
        fetchData(`stages/${year}`).then(stages => {
            handleStages(stages);
        }).catch(error => {
            console.error(error);
            setStagesLoadingText('Could not get the stages right now');
        });
    }, [isStagesClicked, year]);

    const isLoadingTeam = teamsAndRiders === null;
    const isLoadingStages = stages === null;

    const tabs = tabContent(isLoadingTeam, teamLoadingText, teamsAndRiders, isLoadingStages, stagesLoadingText, stages, year, finishedStages);
 
    return (
        <div className={styles.background}>
            <RaceLogo />
            <div className={styles.teamsContainer}>
                <div className={styles.info}>
                    <h1>Tour de France {year}</h1>
                    <div>
                        <p>Scroll through all 21 stages of Tour de France {year} to get a recap of every stage. For the best experience please use the website on a desktop or laptop.</p>
                        <p>To stay updated on all the exciting moments, route details, and results of the Tour de France
                            please visit the official website of the Tour de France: <a href="https://www.letour.fr/en/" target="blank">Tour de France Official Website</a></p>
                    </div>
                </div>
                {!isLoadingTeam && finishedStages.length > 0 && <div className={styles.center}>
                    <Link to={`/stages/${year}`} className={`btn btn-primary btn-large ${styles.spacing}`} >Go to stages</Link>
                    <Link to={`/overview/${year}`} className={`btn btn-secondary btn-large ${styles.spacing}`} >Skip to overall Overview</Link>
                </div>}
                <Tabs tabs={tabs} handleAction={handleIsStagesClicked}/>
            </div>
        </div>
    );
}

export default StartListPage;