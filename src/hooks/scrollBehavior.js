import { useState } from "react";

function useScrollBehavior(currentStage, handleStageChange, viewportWidth, scrollSpeed, numberOfStages) {
    const [boxWidth, setBoxWidth] = useState(0);
    const [showOverview, setShowOvevriew] = useState(false);
    
    const handleBoxWidth = (width) => {
        setBoxWidth(width);
    }

    const handleShowOverviewChange = (bool) => {
      setShowOvevriew(bool);
    }

    function scroll(event) {     
        if(event.deltaY < 0) {
            // scroll up
            if(boxWidth <= 0) {
              if(showOverview) {
                handleShowOverviewChange(false);
                handleBoxWidth(viewportWidth);
                return;
              }
              if(currentStage > 0) {
                handleBoxWidth(viewportWidth);
                handleStageChange(currentStage - 1);
                handleShowOverviewChange(true);
              }
              return;
            }
            
            handleBoxWidth(boxWidth - scrollSpeed);
          } else {
            // scroll down
            if(boxWidth >= viewportWidth) {
              handleBoxWidth(0);
              if(!showOverview) {
                handleShowOverviewChange(true);
                return;
              }
              if(currentStage < numberOfStages - 1) {
                handleStageChange(currentStage + 1);
                handleShowOverviewChange(false);
              }
              if(currentStage === numberOfStages - 1) {
                handleStageChange(numberOfStages);
              }
              return;
            }
    
            handleBoxWidth(boxWidth + scrollSpeed);
          }
    }
    
    return {currentStage, boxWidth, showOverview, scrollBehavior: scroll};
}

export default useScrollBehavior;