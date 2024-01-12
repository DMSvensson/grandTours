const resultsTypes = {
    stageResults: 'stage_results',
    yellow: 'yellow',
    green: 'green',
    polka: 'polka',
    youth: 'youth',
    team: 'team',
    fighter: 'fighter'
}

const jerseryTypes = {
    [resultsTypes.stageResults]: "Stage results",
    [resultsTypes.yellow]: "yellow_jersey",
    [resultsTypes.green]: "green_jersey",
    [resultsTypes.polka]: "polka_jersey",
    [resultsTypes.youth]: "youth_jersey",
    [resultsTypes.team]: "best_team",
    [resultsTypes.fighter]: "fighter",
};

const getJerseyByType = (resultType) => {
    return jerseryTypes[resultType];
};

export {
    getJerseyByType, 
    resultsTypes
}