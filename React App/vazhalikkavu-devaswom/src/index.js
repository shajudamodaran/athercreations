import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../src/Fonts/FML-Indulekha-Heavy-Bold.ttf'
import '../src/Fonts/FML-Indulekha.ttf'
import '../src/Fonts/Gayathri-Bold.ttf'
import '../src/Fonts/Gayathri-Regular.ttf'
import '../src/Fonts/Gayathri-Thin.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
