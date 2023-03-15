import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <header className="NavBar">
        <div className='LeftBanner'>
            <h1>{props.pageName}</h1>
            <div className='NavButtonsContainer'>
                <Link to={"/"}><h4>Home</h4></Link>
                {props.pageName === "Projects" ?
                    <Link to={"/skills"}><h4>Skills</h4></Link>
                    :
                    <Link to={"/projects"}><h4>Projects</h4></Link>
                }
            </div>
        </div>
        <div className='AuthenticationBanner'>

        </div>
    </header>
  );
}

export default NavBar;