import { takeEvery, put, call } from 'redux-saga/effects';
import bugApi from '../services/bugApi';

/* Loading Bugs Saga */
function *watchLoadBugs(){
    /* Listen for incoming action 'BUGS_LOAD' and exec loadBugs function */
    yield takeEvery('BUGS_LOAD', loadBugs);
}

function *loadBugs(){
    try {
        /* Dispatch action 'ASYNC_START' */
        yield put({type: 'ASYNC_START'});

        /* Call the API to load bugs */
        const bugs = yield call(bugApi.getAll);

        /* Dispatch action 'BUGS_LOAD_SUCCESS' with data */
        yield put({type: 'BUGS_LOADED', payload: bugs});

        /* Dispatch action 'ASYNC_COMPLETE' */
        yield put({type: 'ASYNC_COMPLETE'});
    } catch (error) {
        console.log(error);
    }
}

export default watchLoadBugs;
