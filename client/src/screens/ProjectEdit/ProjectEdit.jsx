import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
// import ProjectDetails from ''
import { getProject, updateProject } from '../../services/projects'


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
    fetchProject()
  }, [id])

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
    <Layout>
      <div className='project-edit'>
        <div className='image-container'>
          <img
            className='edit-project-image'
            src={project.img_URL}
            alt={project._title}
          />
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={project.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          {/* <form onSubmit={handleSubmit}> */}
            <input
              className='edit-image-url'
              placeholder='Image URL'
              value={project.imgURL}
              name='imageURL'
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
            value={project.about}
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
        </form>
      </div>
    </Layout>
  )
}

export default ProjectEdit