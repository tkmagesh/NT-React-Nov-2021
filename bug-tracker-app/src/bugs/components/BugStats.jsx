const BugStats = ({bugs}) =>{
    const closedBugsCount = bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
    return (
        <section className="stats">
            <span className="closed">{closedBugsCount}</span>
            <span> / </span>
            <span>{bugs.length}</span>
        </section>
    )
}

export default BugStats;