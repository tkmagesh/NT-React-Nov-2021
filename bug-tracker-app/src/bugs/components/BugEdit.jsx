import { useState } from 'react';

const BugEdit = ({addNew, projects}) => {
    const [newBugName, setNewBugName] = useState('');
    const [selectProjectId, setSelectProjectId] = useState('');
    const projectOptions = projects.map(project => (
        <option key={project.id} value={project.id}>{project.name}</option>
    ));
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <select onChange={ evt => setSelectProjectId(evt.target.value)}>
                <option value="">---Select Project---</option>
                {projectOptions}
            </select>
            <button onClick={() => addNew(newBugName, selectProjectId)}>Add New</button>
        </section>
    )
};
export default BugEdit;