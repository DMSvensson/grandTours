import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/years.css'
import reportWebVitals from './reportWebVitals';
import { WheelActiveProvider } from './contexts/WheelActiveContext';
import { RouterProvider } from 'react-router-dom';
import router from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WheelActiveProvider>
      <RouterProvider router={router} />
    </WheelActiveProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
