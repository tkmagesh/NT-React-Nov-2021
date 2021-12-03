import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import './index.css';

import { bindActionCreators } from 'redux';
import bugActionCreators from './actions';
import { useDispatch, useSelector } from 'react-redux';

const Bugs = () => {

    //Creating action dispatchers
    const dispatch = useDispatch();
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    const { addNew, remove, toggle, removeClosed } = bugActionDispatchers;

    //extract state from the store
    /* 
    const bugs = useSelector(function(storeState){
        return storeState.bugsState;
    }); 
    */
    /* 
    const bugs = useSelector(state => state.bugsState);
    const projects = useSelector(state => state.projectsState); 
    */

    const { bugsState : bugs , projectsState :projects } = useSelector(state => state)
    const bugsWithProject = bugs.map(bug => {
        const project = projects.find(p => p.id === bug.projectId);
        return { ...bug, projectName : project.name };
    })

    return (
        <div>
            <h3>Bugs</h3>
            <BugStats bugs={bugsWithProject} /> 
            <BugSort/>
            <BugEdit addNew={addNew} projects={projects} /> 
            <BugList {...{ bugs : bugsWithProject, toggle, remove, removeClosed}} />
        </div>
    )
}

export default Bugs;