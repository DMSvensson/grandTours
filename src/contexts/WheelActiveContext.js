import React, { createContext, useContext, useRef, useState } from 'react';
import { stopAutoScroll } from '../utility/autoScroll';
import mouseWheelScroll from '../utility/mouseWheelScroll';

const WheelActiveContext = createContext();

export const useWheelActive = () => {
  return useContext(WheelActiveContext);
};

export const WheelActiveProvider = ({ children }) => {
  const [isWheelActive, setWheelActive] = useState(true);
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef(null);

  const handleWheel = (event) => {
    if (isWheelActive) {
      mouseWheelScroll(event, boxWidth, setBoxWidth);
      stopAutoScroll();
    }
  };

  return (
    <WheelActiveContext.Provider value={{ isWheelActive, setWheelActive, boxWidth, setBoxWidth, boxRef }}>
      <div onWheel={handleWheel} style={{ height: 'inherit' }}>
        {children}
      </div>
    </WheelActiveContext.Provider>
  );
};