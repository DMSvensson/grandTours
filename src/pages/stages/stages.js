import React, { useEffect, useState } from 'react';
import './stages.css';

import Stage from '../../components/stage/stage';
import { WheelActiveProvider } from '../../contexts/WheelActiveContext';
import StageOverview from '../../components/stageOverview/stageOverview';
import { fetchData } from '../../utility/dataFetch';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useStage } from '../../contexts/StageContext';
import ProgressBox from '../../components/progressBox/progressBox';

function StagesPage() {
  const { year } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { showOverview, currentStage, handleStageChange } = useStage();

  const isLoading = data === null;
  const stage = isLoading ? 'Loading...' : data;
  
  const handleDataChange = (data) => {
    setData(data);
  };

  useEffect(() => {
    let stageNumber = currentStage;
    if (state) {
      if (state.stageNumber) {
        stageNumber = state.stageNumber;
        handleStageChange(stageNumber);
      }
    }

    fetchData(`stages/${year}/${stageNumber}`).then(stage => {
      handleDataChange(stage);
      if (state) {
        state.stageNumber = undefined;
      }
    }).catch(error => {
      console.error(error);
      if (error.message === '404') {
        navigate('/');
      }
    });
  }, [year, state, currentStage, navigate, handleStageChange]);


  return (
    <WheelActiveProvider>
      <ProgressBox showOverview={showOverview} year={year}/>
      <div id='scrollContainer' className='container'>
        {!isLoading && !showOverview && <Stage stage={stage} year={year} handleSelectedStage={handleStageChange} />}
        {!isLoading && showOverview && <StageOverview results={stage.overview} stageNumber={stage.stage_number} year={year} />}
      </div>
    </WheelActiveProvider>
  );
}

export default StagesPage;