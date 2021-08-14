import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import {createProject} from '../../services/projects'
import{Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './CreateProject.css'

const CreateProject = (props) => {

  const [formData, setFormData] = useState({
    admin_id: 1,
    project_title: '',
    about:'',
    skills:'',
    github_url:'',
    deploy_url:'',
    image_url:'',
  })

  const history = useHistory()

  const [isNew, setIsNew] = useState(false)


  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value, 
      admin_id:1,
      
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProject = await createProject(formData)
    setIsNew(newProject)
    history.push('/projects');
  }
  if(isNew) {
    return<Redirect to={'/projects'} />;
  }


  return (
    <Layout>
    <div>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Project_title">Project Title:</label>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          name='project_title'
          value={formData.name}
        />
        <br></br>
        <label htmlFor="about">About:</label>
        <input
        onChange={handleChange}
          id="name"
          type="text"
          name='about'
          value={formData.name}
        />
        <br></br>
        <label htmlFor="Skills">Skills:</label>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          name='skills'
          value={formData.name}
        />
        <br></br>
        <label htmlFor="github_url">GitHub URL:</label>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          name='github_url'
          value={formData.name}
        />
        <br></br>
        <label htmlFor="deploy_url">Deploy URL:</label>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          name='deploy_url'
          value={formData.name}
        />
        <br></br>
        <label htmlFor="image_url">Image URL:</label>
         <input 
          onChange={handleChange}
          id="name"
          type="text"
          name='image_url'
          value={formData.name}
        /> 
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  </Layout>
  )
}
export default CreateProject