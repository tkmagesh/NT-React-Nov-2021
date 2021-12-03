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
    const bugs = useSelector(state => state.bugsState);

    return (
        <div>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} /> 
            <BugSort/>
            <BugEdit addNew={addNew} /> 
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}

export default Bugs;