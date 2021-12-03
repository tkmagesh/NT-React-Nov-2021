import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './store'
import Bugs from './bugs'
import Projects from './projects';
import Home from './home';
import NotFound from './notfound';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import * as RRD from 'react-router-dom';
console.log(RRD);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <h1>Bug Tracker</h1>
      <hr/>
      <Router>
        <div>
          <span> [ <Link to="/"> Home </Link> ] </span>
          <span> [ <Link to="/projects"> Projects </Link> ] </span>
          <span> [ <Link to="/bugs"> Bugs </Link> ] </span>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/bugs">
            <Bugs/>
          </Route>
          <Route path="**">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
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