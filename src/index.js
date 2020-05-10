import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { StateProvider } from './store';

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
