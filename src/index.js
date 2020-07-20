import React from 'react';
import { render } from 'react-dom';

// Components
import App from './App';
// Styles
import './index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
