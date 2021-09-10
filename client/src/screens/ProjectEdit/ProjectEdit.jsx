import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getProject, updateProject, deleteProject } from '../../services/projects'
import './ProjectEdit.css'


const ProjectEdit = (props) => {
  const [project, setProject] = useState({
    project_title: '',
    about: '',
    skills: '',
    github_url: '',
    deploy_url: '',
    image_url: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id)
      setProject(project)
    }
    fetchProject();

  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target
    setProject({
      ...project,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateProject(id, project)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/projects/${id}`} />
  }

  return (
    <Layout admin ={props.admin} screen={props.screen}>
  <div className = 'edit-page-container'>
   <div className = 'edit-title'>
        <h2>E</h2>
        <h2>D</h2>
        <h2>I</h2>
        <h2>T</h2>
    </div>
    
      <div className='project-edit'>
        <div className='image-container'>
          <img
            className='edit-project-image'
            src={project.img_url}
            alt={project._title}
          />
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='title'
            value={project.project_title}
            name='project_title'
            required
            autoFocus
            onChange={handleChange}
          />
          {/* <form onSubmit={handleSubmit}> */}
            <input
              className='edit-image-url'
              placeholder='Image URL'
              value={project.image_url}
              alt={project.project_title}
              name='imageURL'
              width="300"
              required
              onChange={handleChange}
            />
          {/* </form> */}
            <textarea
              className='about'
              rows={5}
              cols={50}
              placeholder='About'
              value={project.about}
              name='about'
              required
              onChange={handleChange}
            />
          <input
            className='input-skills'
            placeholder='Skills'
            value={project.skills}
            name='skills'
            required
            onChange={handleChange}
          />
          <input
            className='input-github'
            placeholder='Github URL'
            value={project.github_url}
            name='github'
            required
            onChange={handleChange}
          />
          <input
            className='input-deploy'
            placeholder='Deploy URL'
            value={project.deploy_url}
            name='deploy'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
          <button type='submit' onClick={() => deleteProject(project.id)} className='delete-button'>
            Delete
          </button>
        </form>
      </div>
  </div>
    </Layout>
  )
}

export default ProjectEdit