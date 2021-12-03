import bugApi from '../bugs/services/bugApi';

import { createStore, combineReducers, applyMiddleware } from 'redux';

//redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';

//saga middleware factory
import createSagaMiddleware from 'redux-saga';


import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projects-reducer';

//importing the sagas
import watchLoadBugs from '../bugs/sagas/loadBugsSaga';

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


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(loggerMiddleware, sagaMiddleware))
);

sagaMiddleware.run(watchLoadBugs);

export default store;