import './Skills.css';
import { Link } from 'react-router-dom';

function Skills() {
  return (
    <div className="Skills">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
    </div>
  );
}

export default Skills;