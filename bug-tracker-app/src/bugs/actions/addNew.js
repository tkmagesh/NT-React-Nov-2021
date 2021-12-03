//TOBE FIXED
let _currentBugId = 0;

function addNew(bugName){
    const newBug = {
        id : ++_currentBugId,
        name : bugName,
        createdAt : new Date(),
        isClosed : false
    };
    const action = { type : 'BUGS_ADD_NEW', payload : newBug };
    return action;
}

export default addNew;