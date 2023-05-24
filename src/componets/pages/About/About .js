import { NavLink } from "react-router-dom"
import './index.scss'
const About = () => {
  return (
    <div className="about-main">
        <h1>Under Construction</h1>
        <div className="button-pre">
          <NavLink to='/about'>
            <button type="button">Previous page</button>
          </NavLink>
        </div>
    </div>
  )
}

export default About