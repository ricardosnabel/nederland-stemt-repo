import { Link } from "react-router-dom";
import '../assets/styles/styles.css'

function Navbar(isloggedin) {
    let firstName;
    let lastName;

    function getUserInfo(){
        const user = localStorage.getItem(isloggedin.email);
        firstName = user.firstname;
        lastName = user.lastname;
        return firstName, lastName;
    }

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
                        <Link to='/createsubject'>Creeër</Link>
                    </li>
                    {isloggedin.islogged 
                    ? <li className="navitems">Welkom, {getUserInfo()}</li>
                    : <><li className="navitems">
                        <Link to='/login'>Login</Link>
                        </li>
                        <li className="navitems">
                            <Link to='/signup'>Registreer</Link>
                        </li></>
                    }
                </ul>
            </nav>
        </div>
    );

};

export default Navbar;