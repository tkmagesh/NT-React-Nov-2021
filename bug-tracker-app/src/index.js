import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bindActionCreators } from 'redux';

import bugActionCreators from './bugs/actions';
import projectActionCreators from './projects/actions';

import store from './store'
import Bugs from './bugs'
import Projects from './projects';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

function renderApp(){
  const storeState = store.getState();
  const bugs = storeState.bugsState;
  const projects = storeState.projectsState;
   
  ReactDOM.render(
      <div>
        <h1>Bug Tracker</h1>
        <Projects projects={projects} {...projectActionDispatchers}/> 
        <Bugs bugs={bugs} {...bugActionDispatchers}/>
      </div>,
      document.getElementById('root')
  )
}
renderApp();
store.subscribe(renderApp);

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