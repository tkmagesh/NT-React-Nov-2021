//TOBE FIXED
let _currentBugId = 0;

function addNew(bugName, projectId){
    const newBug = {
        id : ++_currentBugId,
        name : bugName,
        createdAt : new Date(),
        isClosed : false,
        projectId : projectId
    };
    const action = { type : 'BUGS_ADD_NEW', payload : newBug };
    //console.log(action);
    return action;
}

export default addNew;