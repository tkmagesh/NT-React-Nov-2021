import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './store'
import Bugs from './bugs'
import Projects from './projects';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Bug Tracker</h1>
      <Projects/>
      <Bugs/>
    </div>
  </Provider>,
    document.getElementById('root')
)


/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
*/

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