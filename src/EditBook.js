//This component will display a form to edit a book's details.
//In this component, I'm using the useState, useEffect, useParams, and useHistory hooks. 
//useState is used to create state variables for each input field in the form, 
//useEffect is used to fetch the current details of the book and prefill the form fields when the component mounts, 
//useParams is used to get the ID of the book from the URL, 
//and useHistory is used to programmatically navigate the user back to the book details page after the book is updated.
import { useEffect, useState } from "react";
import { useParams, useHistory, useNavigate } from "react-router-dom";

function EditBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(data => {
                setTitle(data.title);
                setAuthor(data.author);
                setDescription(data.description);
                setReview(data.review);
            });
    }, [id]);
    //The handleSubmit function is called when the form is submitted. 
    //This function creates a new book object from the state variables, 
    //makes a PUT request to the server to update the book, and then navigates back to the book details page.
    const handleSubmit = (event) => {
        event.preventDefault();

        const book = { title, author, description, review };

        fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
            .then(() => {
                navigate(`/books/${id}`);
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
            <button type='submit'>Update Book</button>
        </form>
    );
}

export default EditBook;