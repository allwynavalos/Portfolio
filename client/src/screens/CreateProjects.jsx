import { useState } from 'react'
import {useHistory} from 'react-router-dom'

export default function CreateProject() {

  const [formData, setFormData] = useState({
    name: '',
    admin_id: '',
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
      name:'',
      admin:'',
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
    <div>
      <h1>Add Project</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="Project_title">Project Title:</label>
        <label htmlFor="about">About:</label>
        <label htmlFor="Skills">Skills:</label>
        <label htmlFor="github_url">GitHub URL:</label>
        <label htmlFor="deploy_url">Deploy URL:</label>
        <label htmlFor="image_url">Image URL:</label>

        <input
          onChange={(e) => handleChange(e)}
          id="name"
          type="text"
          value={formData.name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}