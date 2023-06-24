//This component will display a form to add a new book.
//In this component, I'm using the useState hook to create state variables for each input field in the form. 
//I'm also using the useHistory hook from react-router-dom to programmatically navigate the user back to the book list after a book is added.
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');
    const history = useHistory();

    //The handleSubmit function is called when the form is submitted. 
    //This function creates a new book object from the state variables, 
    //makes a POST request to the server to add the new book, and then navigates back to the book list.    
    const handleSubmit = (event) => {
        event.preventDefault();

        const book = { title, author, description, review };

        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }).then(() => {
            history.push('/books');
        });

    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Book title:
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Author:
                <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Review:
                <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
            </label>
            <button type='submit'>Add Book</button>
        </form>
    );
}

export default AddBook; 