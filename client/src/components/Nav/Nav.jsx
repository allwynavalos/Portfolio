import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">O || A</NavLink>
                <div className="links">
                    <NavLink className="link" to="/projects">Projects</NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                    <NavLink className="link" to="/contact">Contact</NavLink>
                    <NavLink className="link" to="/">Home</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav