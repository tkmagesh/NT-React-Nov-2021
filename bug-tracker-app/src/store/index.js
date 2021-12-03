import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projects-reducer';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
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

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
export default store;