import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.js';
import { Provider } from 'react-redux';
import { store, persistor } from './store';


ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
        <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
