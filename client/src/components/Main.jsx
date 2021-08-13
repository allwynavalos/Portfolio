import { Route } from "react-router-dom"
import Home from '../screens/Home/Home'
import Projects from '../screens/Projects/Projects'
import CreateProject from '../screens/CreateProject'
import EditProject from "../screens/EditProject"
import ProjectDetail from "../screens/ProjectDetail"

export default function Main() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/projects/:id">
        <ProjectDetail/>
      </Route>
      <Route exact path="/create-project">
        <CreateProject/>
      </Route>
      <Route exact path="/project/:id/edit">
        <EditProject/>
      </Route>
      <Route exact path="/comments">
        <Comments/>
      </Route>
    </div>
  )
}