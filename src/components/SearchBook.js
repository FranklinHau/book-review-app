//This component fetches book data from the server, displays a search box for searching books, 
//and displays a list of books that match the search term.

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function SearchBook() {
    //These lines create state variables for books and searchTerm, along with functions to update them (setBooks and setSearchTerm). 
    //The initial values of these state variables are an empty array and an empty string, respectively.
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //This function fetches the book data from the server and sets the books state to the fetched data.
    const fetchBooks = async () => {
        const response = await fetch('http://localhost:3001/books');
        const data = await response.json();
        setBooks(data);
    };

    //hook calls fetchBooks when the component is first rendered. 
    //The empty array [] means that the effect doesn't depend on any values from props or state, so it only runs on mount and unmount.
    useEffect(() => {
        fetchBooks();
    }, []);

    //This function updates the searchTerm state when the search box's value changes.
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // This line filters the books array to only include books whose title includes the searchTerm. 
    //The toLowerCase method is used to make the search case-insensitive.
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    //renders a search box and a list of books that match the search term. 
    //Each book is a Link that navigates to the book's details page when clicked.
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

export default SearchBook;