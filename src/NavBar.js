

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link className='nav-link' to="/books">Books</Link>
            <Link className='nav-link' to='/books/new'>Add Book</Link>
        </nav>
    );
}

export default NavBar;