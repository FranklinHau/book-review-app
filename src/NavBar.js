

import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location =useLocation();
    return (
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