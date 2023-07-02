//This component displays a form for creating a new book, 
//sends a POST request to the server to create the book when the form is submitted, 
//and navigates to the '/books' route once the book is created.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

//These lines create state variables for title, author, year, description, review, and rating, 
// with functions to update them (setTitle, setAuthor, setYear, setDescription, setReview, and setRating). 
//The initial values of these state variables are empty strings or 0.
function CreateBook({ setNewBookAdded }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();  // hook to get a function that can be used to navigate to different routes.


    //This function is called when the form is submitted. It prevents the page from refreshing, 
    //creates a new book object, sends a POST request to the server to create a new book, 
    //and then navigates to the '/books' route.
    const handleSubmit = (event) => {
        event.preventDefault();

        const book = {
            title,
            author,
            year,
            description,
            reviews: [{ text: review, rating }]
        };

        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }).then(() => {
            navigate('/books');
        });

    };
    //This function navigates to the home page when called.
    const handleHomeClick = () => {
        navigate('/');
    }

    //renders a form with fields for the book title, author, year, description, review, and rating. 
    //The values of these fields are bound to the corresponding state variables,
    //and the onChange handlers update the state when the fields are changed.
    return (
        <form className='addbook-form' onSubmit={handleSubmit}>
            <label>
                Book title:
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Author:
                <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </label>
            <label>
                Year:
                <input type='text' value={year} onChange={(e) => setYear(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea className='description-box' value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Review:
                <textarea className='review-box' value={review} onChange={(e) => setReview(e.target.value)} required />
            </label>
            <label>
                Rating:
                <StarRating rating={rating} setRating={setRating} />
            </label>
            <button type='submit' className='add-book-btn'>Add Book</button>
            <button type='button' onClick={handleHomeClick} className='home-btn'>Home</button>
        </form>
    );
}

export default CreateBook; 