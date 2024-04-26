import { Outlet, Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
    <Link to="/">Acceuil</Link>
    </li>
    <li>
    <Link to="/admin">Admin</Link>
    </li>
    <li>
    <Link to="/contact">Contact</Link>
    </li>
    <li>
    <Link to="/formation">Formation</Link>
    </li>
    <li>
    <Link to="/inscription">Inscription</Link>
    </li>
    <li>
    <Link to="/student">Student</Link>
    </li>
    <li>
    <Link to="/login">Login</Link>
    </li>
    </ul>
</nav>
        <Outlet />
       
        </>
    )
};
export default NavBar;