import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{height: 'inherit'}}>
      <Outlet />
    </div>
  );
}

export default App;