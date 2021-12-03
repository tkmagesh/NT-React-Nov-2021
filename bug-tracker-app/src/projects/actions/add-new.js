let _projectId = 10;
export function addNew(projectName){
    return { type : 'PROJECT_ADD', payload : { id : `P-${++_projectId}`, name : projectName } };
}