import { useState, useEffect } from 'react'
// import './ProductDetail.css'
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
            <div className="project-detail">
                <img className="project-detail-image" src={project.image_url} alt={project.project_title} />
                <div className="detail">
                    <div className="name">{project.project_title}</div>
                    <div className="about">{project.about}</div>
                    <div className="skills">{project.skills}</div>
                    <a href={project.github_url} target="_blank" rel="noreferrer">
              Github
            </a>{" "}
            <a href={project.deploy_url} target="_blank" rel="noreferrer">
              Deployed Site
            </a>{" "}
                    <div className="image URL">{project.image_url}</div>
                    <button className="edit-button"><Link className="edit-link" to={`/projects/${project.id}/edit`}>Edit</Link></button>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectDetail


