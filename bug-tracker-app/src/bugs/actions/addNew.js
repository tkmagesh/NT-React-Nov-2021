//TOBE FIXED
let _currentBugId = 0;

function addNew(bugName){
    const newBug = {
        id : ++_currentBugId,
        name : bugName,
        createdAt : new Date(),
        isClosed : false,
        projectId : 0 /* the selected project id */
    };
    const action = { type : 'BUGS_ADD_NEW', payload : newBug };
    //console.log(action);
    return action;
}

export default addNew;