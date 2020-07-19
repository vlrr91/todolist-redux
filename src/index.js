import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Redux
import reducer from './reducers';
// Components
import App from './App';
// Styles
import './index.css';

const store = createStore(reducer);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
