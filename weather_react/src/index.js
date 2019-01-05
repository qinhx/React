import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import SelectCity from './SelectCity'
import './index.css';
import store from './Store'
import {Provider} from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <div>
      <SelectCity/>
      <Weather />
    </div>
  </Provider>
  ,
  document.getElementById('root')
);
