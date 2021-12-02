import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



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


//ES6 Modules
/* 
//importing the module object
import * as calculator from './calc';
console.log(calculator);
console.log(calculator.add(100,200)); 
*/

/* 
import * as calculator from './calc';
const add = calculator.add
console.log(add(100,200)); 
*/

/* 
import * as calculator from './calc';
const { add } = calculator;
console.log(add(1000,200)); 
*/

/* 
import { add } from './calc';
console.log(add(1000,2000));  
*/

//importing the default exported entity
/* 
import utilObj from './calc';
console.log(utilObj); 
*/