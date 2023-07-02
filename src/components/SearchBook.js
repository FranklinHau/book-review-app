

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function BookList() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:3001/books');
        const data = await response.json();
        setBooks(data);
    };
    useEffect(() => {
        fetchBooks();
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
                className="search-input"
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