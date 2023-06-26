//This component will contain links to navigate between the different routes. 
//I'm using the Link component from react-router-dom to create navigation links. 
//When someone click on a Link, it updates the URL without causing a page refresh.
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BookDetails() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div>
                <input 
                    type='text'
                    placeholder='search for a book'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    />
                    {filteredBooks.map(book => (
                        <div key={book.id}>
                            <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                            <p>{book.author}</p>
                            </div>
                    ))}
            </div>
        );
}

function NavBar() {
    return (
        <nav>
            <Link className='nav-link' to="/books">Books</Link>
            <Link className='nav-link' to='/books/new'>Add Book</Link>
        </nav>
    );
}

export default NavBar;