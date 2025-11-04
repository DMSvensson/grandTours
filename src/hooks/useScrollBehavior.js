import { useEffect } from "react";
import { useStage } from "../contexts/StageContext";
import { getIntervalId } from "../utility/autoScroll";
import { useNavigate } from "react-router-dom";

const numberOfStages = 21;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

function goForward(setBoxWidth, stageNumber, year, showOverview, handleShowOverview, handleStageChange, navigate) {
  setBoxWidth(0);
  if (showOverview === false) {
    // show overview
    handleShowOverview(true);
  } else {
    // go to next stage
    if (stageNumber <= numberOfStages - 1) {
      handleStageChange(stageNumber + 1);
      handleShowOverview(false);
    } else if (stageNumber === numberOfStages) {
      navigate(`/${year}/overview`);
    }
  }
}

function useScrollBehavior(boxWidth, setBoxWidth, year) {
  const navigate = useNavigate();
  const { showOverview, handleShowOverview, currentStage, handleStageChange } = useStage();
  useEffect(() => {
    const stageNumber = +currentStage;
    if (getIntervalId()) {
      if (boxWidth === viewportWidth) {
        setTimeout(() => {
          goForward(setBoxWidth, stageNumber, year, showOverview, handleShowOverview, handleStageChange, navigate);
        }, 3000);
      }
    } else {
      if (boxWidth === viewportWidth + 100) {
        goForward(setBoxWidth, stageNumber, year, showOverview, handleShowOverview, handleStageChange, navigate);
      } else if(boxWidth < 0) {
        if(showOverview) {
          handleShowOverview(false);
          setBoxWidth(viewportWidth);
        } else if (currentStage > 1) {
          setBoxWidth(viewportWidth);
          handleStageChange(stageNumber - 1);
          handleShowOverview(true);
        }
      }
    }
  }, [boxWidth, currentStage, handleShowOverview, handleStageChange, setBoxWidth, showOverview, year, navigate]);
}

export default useScrollBehavior;