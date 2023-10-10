import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './context-implementation/App';
import AppRedux from './redux-implementation/AppRedux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <AppRedux />
  </React.StrictMode>
);

