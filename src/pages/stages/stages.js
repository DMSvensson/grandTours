import React, { useEffect, useRef, useState } from 'react';
import './stages.css';

import Stage from '../../components/stage/stage';
import useScrollBehavior from '../../hooks/scrollBehavior';
import {useWheelActive } from '../../contexts/WheelActiveContext';
import StageOverview from '../../components/stageOverview/stageOverview';
import { fetchData } from '../../utility/dataFetch';

function StagesPage() {
  const [data, setData] = useState(null);
  const {isWheelActive} = useWheelActive();
  const boxRef = useRef(null);
  const scrollSpeed = 40;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const isLoading = data === null;
  const numberOfStages = isLoading ? 0 : 21;
  const {currentStage, boxWidth, showOverview, scrollBehavior} = useScrollBehavior(viewportWidth, scrollSpeed, numberOfStages);
  const stage = isLoading ? 'Loading...' : data;
  
  const handleDataChange = (data) => {
    setData(data);
  };

  const handleWheel = (event) => {
    if (isWheelActive) {
      scrollBehavior(event);
    }
  };
  
  useEffect(() => {
    fetchData(`stages/${currentStage + 1}`).then(stage => {
      handleDataChange(stage);
    }).catch(error => {
      console.error(error);
    });
  }, [currentStage]);

  return (
    <div style={{height: 'inherit'}}>
      <div ref={boxRef} id="box" className='box' style={{width: `${boxWidth}px`}}></div>
      <div onWheel={handleWheel} id='scrollContainer' className='container'>
        {!isLoading && !showOverview && <Stage stage={stage} boxRef={boxRef}/>}
        {!isLoading && showOverview && <StageOverview results={stage.overview} stageNumber={stage.stage_number}/>}
      </div>
    </div>
  );
}

export default StagesPage;