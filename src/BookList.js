

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function BookList() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
        <div className='search-box'>
            <input 
                type="text" 
                placeholder="Search for a book" 
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

export default BookList;