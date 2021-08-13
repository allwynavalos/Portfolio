import {verify} from './services/admin'
import {useState, useEffect} from 'react'
import Home from './screens/Home/Home'
import Projects from './screens/Projects/Projects'
import ProjectDetails from './screens/ProjectDetail/ProjectDetails'
import About from './screens/About/About'
import ProjectEdit from './screens/ProjectEdit/ProjectEdit'
import CreateProject from './screens/CreateProject/CreateProjects'
import Contact from './screens/Contact/Contact'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import {Route} from 'react-router-dom'

function App() {
  const [admin, setAdmin] = useState(null)

  useEffect(() => {
    const fetchAdmin = async () => {
      const admin = await verify();
      setAdmin(admin ? admin : null);
    };
    fetchAdmin();
  }, []);
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/projects/:id">
        <ProjectDetails admin={admin}/> </Route>
      <Route exact path='/about/' component={About}/>
      <Route exact path='/projects/:id/edit' component={ProjectEdit}/>
      <Route exact path='/projectscreate' component={CreateProject}/>
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/signin'>
       <SignIn setAdmin={setAdmin}/> </Route>
      <Route exact path='/signout'>
        <SignOut setAdmin={setAdmin}/> </Route>
    </div>
  );
}

export default App;
