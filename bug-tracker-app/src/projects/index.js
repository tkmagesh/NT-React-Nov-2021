import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import projectActionCreators from './actions';

const Projects = () => {
    const dispatch = useDispatch()
    const { addNew, remove } = bindActionCreators(projectActionCreators, dispatch)
    const projects = useSelector(state => state.projectsState)
    return (
        <>
            <h3>Projects</h3>
            <ol>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ol>
        </>
    )
}

export default Projects;

