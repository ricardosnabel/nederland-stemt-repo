import { Link } from "react-router-dom";
import '../assets/styles/styles.css'

const Navbar = () => {
    return (
        <div id="header">
            <Link to='/'>
                <h1 id='logo'>Nederland
                    Stemt
                </h1>
            </Link>
            <nav>
                <ul id="navlist">
                    <li className="navitems">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="navitems">
                        <Link to='/about'>Over</Link>
                    </li>
                    <li className="navitems">
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className="navitems">
                        <Link to='/register'>Registreer</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

};

export default Navbar;