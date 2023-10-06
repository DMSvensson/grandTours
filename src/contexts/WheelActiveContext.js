import React, { createContext, useContext, useState } from 'react';

const WheelActiveContext = createContext();

export const useWheelActive = () => {
  return useContext(WheelActiveContext);
};

export const WheelActiveProvider = ({ children }) => {
  const [isWheelActive, setWheelActive] = useState(true);

  return (
    <WheelActiveContext.Provider value={{isWheelActive, setWheelActive}}>
      {children}
    </WheelActiveContext.Provider>
  );
};