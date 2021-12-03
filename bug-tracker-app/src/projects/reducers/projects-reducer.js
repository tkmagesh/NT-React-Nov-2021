const initialState = [
    {id : 'P-1', name : 'Schedule Manager'},
    {id : 'P-2', name : 'Salary Calculator'},
    {id : 'P-3', name : 'Payroll Master'}
]

function projectsReducer(currentState = initialState, action){
    switch (action.type){
        case 'PROJECT_ADD':
            return currentState.concat({id : action.id, name : action.name})
        case 'PROJECT_REMOVE':
            return currentState.filter(project => project.id !== action.id)
        default:
            return currentState
    }
}

export default projectsReducer;