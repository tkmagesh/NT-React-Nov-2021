import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projects-reducer';

//const store = createStore(bugsReducer);
//const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

const store = createStore(rootReducer);

export default store;