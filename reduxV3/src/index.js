import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from './Provider' 
import store from './Store/Store'
import ControlPanel from './views/ControlPanel'
ReactDOM.render(
  <Provider store={store}>
  <ControlPanel/>
  </Provider>,
  document.getElementById('root')
);
