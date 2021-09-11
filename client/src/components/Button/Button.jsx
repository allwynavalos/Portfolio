

const Nav = () => {
return(
  <button>
    <div>
  <Link  to={'/projects'}><button className="project-button"> Projects</button> </Link>
  <Link  to={'/about'}><button className="about-button">About </button> </Link>
  <button type="submit">Submit</button>
  <button className = 'edit-button'><Link className='edit-link' to={`/projects/${project.id}/edit`}>Edit</Link></button>
  <button type='submit' onClick={() => deleteProject(project.id)} className='delete-button'></button>
  <button className="create-button"><Link className="create-link" to={`/projectscreate`}>Create</Link></button>
  </div>
  </button>


)


}