import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';

//saga middleware factory
import createSagaMiddleware from 'redux-saga';

import { takeEvery, put, call } from 'redux-saga/effects';

import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projects-reducer';

function asyncStatusReducer(currentState = '', action){
    switch(action.type){
        case 'ASYNC_START':
            return 'Loading....';
        case 'ASYNC_COMPLETE':
            return '';
        default:
            return currentState;
    }
}

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer,
    asyncStatusState : asyncStatusReducer
});

/* Middlewares */
function loggerMiddleware(store){
    return function loggerDispatch(next){
        return function(action){
            console.group(action.type);
            console.log('%c Previous State', 'color: yellow', store.getState());
            console.log('%c Action', 'color: red', action);
            next(action);
            console.log('%c Next State', 'color: green', store.getState());
            console.groupEnd();
        }
    }
}

/* Loading Bugs Saga */
function *watchLoadBugs(){
    /* Listen for incoming action 'BUGS_LOAD' and exec loadBugs function */
    yield takeEvery('BUGS_LOAD', loadBugs);
}

function getServerBugs(){
    return axios.get('http://localhost:3030/bugs')
        .then(response => response.data);
}

function *loadBugs(){
    /* Dispatch action 'ASYNC_START' */
    yield put({type: 'ASYNC_START'});

    /* Call the API to load bugs */
    const bugs = yield call(getServerBugs);

    /* Dispatch action 'BUGS_LOAD_SUCCESS' with data */
    yield put({type: 'BUGS_LOADED', payload: bugs});

    /* Dispatch action 'ASYNC_COMPLETE' */
    yield put({type: 'ASYNC_COMPLETE'});
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(loggerMiddleware, sagaMiddleware))
);

sagaMiddleware.run(watchLoadBugs);

export default store;