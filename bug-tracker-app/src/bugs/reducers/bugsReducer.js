function bugsReducer(currentState = [], action){
    switch (action.type) {
        case 'BUGS_ADD_NEW':
            const newBug = action.payload;
            return [...currentState, newBug];
        case 'BUGS_REMOVE':
            const bugToRemove = action.payload;
            return currentState.filter(bug => bug.id !== bugToRemove.id); 
        case 'BUGS_REPLACE':
            const bugToReplace = action.payload;
            return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
        case 'BUGS_REMOVE_CLOSED':
            return currentState.filter(bug => !bug.isClosed);
        case 'BUGS_LOADED':
            return action.payload;
        default :
            return currentState;
    }
}

export default bugsReducer;