//This component will contain links to navigate between the different routes. 
//I'm using the Link component from react-router-dom to create navigation links. 
//When someone click on a Link, it updates the URL without causing a page refresh.
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/books">Books</Link>
            <Link to='/books/new'>Add Book</Link>
        </nav>
    );
}

export default NavBar;