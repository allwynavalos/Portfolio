import Home from './screens/Home/Home'
import Projects from './screens/Projects/Projects'
import ProjectDetails from './screens/ProjectDetail/ProjectDetails'
import About from './screens/About/About'
import ProjectEdit from './screens/ProjectEdit/ProjectEdit'
import Contact from './screens/Contact/Contact'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/projects/:id" component={ProjectDetails}/>
      <Route exact path='/about/' component={About}/>
      <Route exact path='/projects/:id/edit' component={ProjectEdit}/>
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
