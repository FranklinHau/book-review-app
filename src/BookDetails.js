//This component will display detailed information about a single book.
//I'm using the useState and useEffect hooks from React, 
//Also using the useParams and useNavigate hooks from react-router-dom. 
//useState is used to create a state variable for the book, 
//useEffect is used to fetch the book from the server when the component mounts, 
//useParams is used to get the ID of the book from the URL,
//useNavigate is used to programmatically navigate the user back to the book list after a book is deleted.

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookDetails() {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

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
                navigate('/books');
            });
    };

    return book && (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.description}</p>
            <p>{book.review}</p>
            <button onClick={handleDelete}>Delete Book</button>
            ,
        </div>
    );
}

export default BookDetails; 