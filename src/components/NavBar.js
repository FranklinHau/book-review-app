
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();   //This line uses the useLocation hook to get the current location object
    return (   //The return statement renders a nav element with two Link components
        //prevent from navigating to the home page when already on the home page.
        //The second Link component is only rendered if the current URL is not '/books/new'. This Link navigates to the '/books/new' route
        <nav className={`navbar-container ${location.pathname === '/books' ? 'home-page' : ''}`} >
            {location.pathname === '/books' ?
                <span className='nav-link1 home-page'>Home</span> :
                <Link className='nav-link1' to="/books">Home</Link>
            }
            {location.pathname !== '/books/new' && <Link className='nav-link2' to='/books/new'>Add Book, Rate & Review</Link>}
        </nav>
    );
}

export default NavBar;