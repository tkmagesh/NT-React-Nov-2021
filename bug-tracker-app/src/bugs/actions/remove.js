function remove(bugToRemove){
    const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
    //console.log(action);
    return action;
}
export default remove;