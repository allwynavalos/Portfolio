import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import {createProject} from '../../services/projects'
import {useHistory} from 'react-router-dom'

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

  const handleChange = (e) => {
    const {value} = e.target
    setFormData({
      admin_id:1,
      project_title: value, 
      about: value, 
      skills: value, 
      github_url: value, 
      deploy_url: value, 
      image_url: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProject = await createProject(formData)
    history.push('/projects')
  }


  return (
    <Layout>
    <div>
      <h1>Add Project</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="Project_title">Project Title:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
        />
        <br></br>
        <label htmlFor="about">About:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
        />
        <br></br>
        <label htmlFor="Skills">Skills:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
        />
        <br></br>
        <label htmlFor="github_url">GitHub URL:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
        />
        <br></br>
        <label htmlFor="deploy_url">Deploy URL:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
        />
        <br></br>
        <label htmlFor="image_url">Image URL:</label>
         <input 
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
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