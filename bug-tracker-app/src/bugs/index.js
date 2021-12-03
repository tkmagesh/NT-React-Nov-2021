import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';

const Bugs = ({bugs, addNew, remove, toggle, removeClosed}) => {
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