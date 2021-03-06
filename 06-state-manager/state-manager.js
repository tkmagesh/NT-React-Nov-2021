const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action =  {type: '@@INIT'};

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

        /* To initialize the store state with a valid default state */
        _currentState = _reducer(undefined, _init_action); 
        
        let store = {
            getState: getState,
            subscribe: subscribe,
            dispatch: dispatch
        };

        return store;
    }

    function bindActionCreators(actionCreators, dispatch){
        const actionDispatchers = {};
        for (let key in actionCreators){
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args);
                dispatch(action)
            }
        }
        return actionDispatchers;
    }
    
    const stateManager = {
        createStore: createStore,
        bindActionCreators: bindActionCreators
    };

    return stateManager;
})()