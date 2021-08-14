import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProjects } from '../../services/projects'
import Project from '../../components/Project/Project'
import Layout from '../../components/Layout/Layout'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects()
      setProjects(allProjects)
    }
    fetchProjects()
  }, [])

  return (
    <Layout>
  
      <div className='projects-container'>
        {projects.map((project) => {
          return (
            
            <Project
              id={project.id}
              title={project.project_title}
              about={project.about}
              skills={project.skills}
              github url={project.github_url}
              deploy url={project.deploy_url}
              image_url={project.image_url} 

              key={project.id}
            />
          )
        })}
      </div>
        <button className="create-button"><Link className="create-link" to={`/projectscreate`}>Create</Link></button>
      </Layout>
  )
}

export default Projects

