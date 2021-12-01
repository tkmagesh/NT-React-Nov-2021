const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function'){
            _callbacks.push(callback);
        }
    }

    //private function
    function _notifyChange(){
        _callbacks.forEach(function(callback){
            callback();
        });
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return; /* NO state changes */
        _currentState = newState;
        _notifyChange();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function'){
            throw new Error('Reducer (function) is mandatory to create the store.')
        }
        _reducer = reducer;
        let store = {
            getState: getState,
            subscribe: subscribe,
            dispatch: dispatch
        };

        return store;
    }

    const stateManager = {
        createStore: createStore
    };

    return stateManager;
})()