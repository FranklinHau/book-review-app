import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './app.css';
import App from './components/App'
import reportWebVitals from './components/reportWebVitals';

const root = createRoot(document.getElementById('root'));//creates a root React fiber on the DOM node with the id of 'root'
root.render(           //rendered into the root DOM node
  <React.StrictMode>
    <App />                 
  </React.StrictMode>
);

reportWebVitals();   //log the performance of your app to the console
