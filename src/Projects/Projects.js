import './Projects.css';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function Projects() {
  return (
    <div className="Projects">
        <NavBar pageName="Projects" />
        <div className='FilterContainer'>

        </div>
        <div className='ContentContainer'>

        </div>
    </div>
  );
}

export default Projects;