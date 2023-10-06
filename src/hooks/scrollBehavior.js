import { useState } from "react";

function useScrollBehavior(viewportWidth, scrollSpeed, numberOfStages) {
    const [currentStage, setCurrentState] = useState(0);
    const [boxWidth, setBoxWidth] = useState(0);

    const handleStageChange = (currentStage) => {
        setCurrentState(currentStage)
    }
    
    const handleBoxWidth = (width) => {
        setBoxWidth(width);
    }

    function scroll(event) {     
        if(event.deltaY < 0) {
            // scroll up
            if(boxWidth <= 0) {
              if(currentStage > 0) {
                handleStageChange(currentStage - 1);
              }
              handleBoxWidth(0);
              return;
            }
            
            handleBoxWidth(boxWidth - scrollSpeed);
          } else {
            // scroll down
            if(boxWidth >= viewportWidth) {
              if(currentStage < numberOfStages - 1) {
                handleStageChange(currentStage + 1);
                handleBoxWidth(0);
              }
              return;
            }
    
            handleBoxWidth(boxWidth + scrollSpeed);
          }
    }
    
    return {currentStage, boxWidth, scrollBehavior: scroll};
}

export default useScrollBehavior;