import { Link } from 'react-router-dom';
import styles from './startList.module.css';
import { fetchTeamsImages } from '../../utility/dataFetch';
export const tabContent = (isLoadingTeam, teamLoadingText, teamsAndRiders, isLoadingStages, stagesLoadingText, stages, year, finishedStages) => {
    return [
        {
            label: 'Teams & Riders',
            content: (<div className={styles.teams}>
                {isLoadingTeam && <p>{teamLoadingText}</p>}
                {!isLoadingTeam && teamsAndRiders && teamsAndRiders.map((team) => {
                    return (
                        <div className={styles.team} key={team.name}>
                            <img src={fetchTeamsImages(year, 'jersey', team.name)} alt={team.name} />
                            <p>{team.name}</p>
                            <hr className={styles.divider} />
                            <ul>
                                {team.riders.map((rider) => {
                                    return <li key={rider}>{rider}</li>
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>)
        },
        {
            label: 'Stages',
            content: (<div className={styles.stages}>
                        {isLoadingStages && <p>{stagesLoadingText}</p>}
                        {!isLoadingStages && stages && stages.map(stage => (
                            <div key={stage.stage_number}>
                                <h3>Stage {stage.stage_number}</h3>
                                <p className="font-family-jose">{stage.route}</p>
                                <p className="font-family-jose">{stage.length} km</p>
                                <p className="font-family-jose">{stage.date}</p>
                                {finishedStages.some(stageNumber => stageNumber.stage_number === stage.stage_number) && <Link to={`/stages/${year}`} state={{stageNumber: stage.stage_number}} className="btn btn-primary">Go to stage</Link>}
                            </div>
                        ))}
                    </div>)
        },
    ];
}