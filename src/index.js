import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
`

ReactDOM.render(
  <>
      <Global/>
      <App />
  </>,
  document.getElementById('root')
);

reportWebVitals();
