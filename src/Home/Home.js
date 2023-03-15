import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function Home() {
  return (
    <div className="Home">
        <h1>Portfolio Portal</h1>
        <Link className="NavLink" to={"/projects"}><h2>Projects</h2></Link>
        <Link className="NavLink" to={"/skills"}><h2>Skills</h2></Link>
    </div>
  );
}

export default Home;