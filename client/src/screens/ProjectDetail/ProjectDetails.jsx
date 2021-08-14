import { useState, useEffect } from 'react'
import './ProjectDetails.css'
import Layout from '../../components/Layout/Layout'
import { getProject } from '../../services/projects'
import { useParams, Link } from 'react-router-dom'

const ProjectDetail = (props) => {

    const [project, setProject] = useState(null)
    const [isLoaded, setLoaded] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchProject = async () => {
            const project = await getProject(id)
            setProject(project)
            setLoaded(true)
        }
        fetchProject()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
          <div class='project-container'> 
          <div class='image-container'>
                <img className="project-detail-image" src={project.image_url} width= "400"alt={project.project_title} />
          </div>
            <div className="details">
             
                
                    <div id="title">{project.project_title}</div>
                    <div id="about">{project.about}</div>
                    <div id="skills">{project.skills}</div>
                    <div id="image-url">{project.image_url}</div>
                    <a id='github' href={project.github_url} target="_blank" rel="noreferrer"> Github</a>{" "}
                    <a id='deploy' href={project.deploy_url} target="_blank" rel="noreferrer">Deployed</a>{" "}
                
            </div>
          </div>
          <div className='edit-button'>
                 <Link  to={`/projects/${project.id}/edit`}><button> Edit</button> </Link>
                 </div>
        </Layout>
    )
}

export default ProjectDetail


