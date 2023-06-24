//This component will display detailed information about a single book.
//I'm using the useState and useEffect hooks from React, 
//Also using the useParams and useHistory hooks from react-router-dom. 
//useState is used to create a state variable for the book, 
//useEffect is used to fetch the book from the server when the component mounts, 
//useParams is used to get the ID of the book from the URL,
//useHistory is used to programmatically navigate the user back to the book list after a book is deleted.

import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function BookDetails() {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data));
    }, [id]);

    //The handleDelete function is called when the delete button is clicked. 
    //This function makes a DELETE request to the server to delete the book, 
    //and then navigates back to the book list.

    const handleDelete = () => {
        fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                history.push('/books');
            });
    };

    return book && (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <p>{book.review}</p>
            <button onClick={handleDelete}>Delete Book</button>
            ,<button><Link to={`/books/${book.id}/edit`}>Edit Book</Link></button>
        </div>
    );
}

export default BookDetails; 