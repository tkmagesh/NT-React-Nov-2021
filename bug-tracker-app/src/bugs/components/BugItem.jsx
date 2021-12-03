const BugItem = ({bug, toggle, remove}) => {
    return (
        <li>
            <span
                className={"bugname " + (bug.isClosed ? 'closed' : '')}
                onClick={() => toggle(bug)}
            >{bug.name}
            </span>
            <div><small> [ {bug.projectName} ] </small></div>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <button onClick={() => remove(bug)}>Remove</button>
        </li>
    )
}
export default BugItem;