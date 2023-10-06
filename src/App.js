import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import Stage from './components/stage/stage';
import useScrollBehavior from './hooks/scrollBehavior';
import {useWheelActive } from './contexts/WheelActiveContext';
import StageOverview from './components/stageOverview/stageOverview';

async function getData() {
  const response = await fetch('/data.json', {
    headers: {
      'content-type': 'application/json',
      'Attept': 'application/json'
    }
  });
  if (!response.ok) {
    console.error(`Response status: ${response.status}`);
    console.error(`Response text: ${await response.text()}`);
    return;
  }
  const json = await response.json();
  return json;
}

function App() {
  const [data, setData] = useState(null);
  const {isWheelActive} = useWheelActive();
  const boxRef = useRef(null);
  const scrollSpeed = 40;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
  
  const handleDataChange = (data) => {
    setData(data);
  };

  const handleWheel = (event) => {
    if (isWheelActive) {
      scrollBehavior(event);
    }
  };
  
  useEffect(() => {
    getData().then((json) => {
      handleDataChange(json);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  const isLoading = data === null;
  const numberOfStages = isLoading ? 0 : data.stages.length;
  const {currentStage, boxWidth, showOverview, scrollBehavior} = useScrollBehavior(viewportWidth, scrollSpeed, numberOfStages);
  const stage = isLoading ? 'Loading...' : data.stages[currentStage];

  return (
    <div style={{height: 'inherit'}}>
      <div ref={boxRef} id="box" className='box' style={{width: `${boxWidth}px`}}></div>
      <div onWheel={handleWheel} id='scrollContainer' className='container'>
        {!isLoading && !showOverview && <Stage stage={stage} boxRef={boxRef}/>}
        {!isLoading && showOverview && <StageOverview results={stage.overview} stageNumber={stage.id}/>}
      </div>
    </div>
  );
}

export default App;