import React, { createContext, useContext, useState } from "react";

const StageContext = createContext(false);

export const StageProvider = ({children}) => {
    const [showOverview, setShowOvevriew] = useState(false);
    const [currentStage, setCurrentState] = useState(1);

    const handleShowOverview = (showOverview) => {
        setShowOvevriew(showOverview);
    }

    const handleStageChange = (stageNumber) => {
        if(stageNumber < 0) {
          setCurrentState(0);
          return;
        }
        if(stageNumber > 21) {
          setCurrentState(21);
          return;
        }
        setCurrentState(stageNumber);
      }

    return (
        <StageContext.Provider value={{showOverview, handleShowOverview, currentStage, handleStageChange}}>
            {children}
        </StageContext.Provider>
    );
};

export const useStage = () => useContext(StageContext);