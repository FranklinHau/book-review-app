//This component will display a list of all books.
//In this component, I'm using the useState and useEffect hooks from React. 
//I'm using useState to create a state variable for the list of books, 
//I'm using useEffect to fetch the list of books from the server when the component mounts.
//I'm also using the Link component to create links to the details page for each book.

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            {books.map(book => (
                <div key={book.id}>
                    <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BookList;