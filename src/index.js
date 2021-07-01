import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Month'
import Day from './daysOfWeek'
import Textbox from './dayContainer'

import './index.css'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className = "gridMain">
      <Day />
      <Textbox />
      <Textbox />
      <Textbox />
      <Textbox />
      <Textbox />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
