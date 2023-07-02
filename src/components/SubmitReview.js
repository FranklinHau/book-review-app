//This component displays a form for submitting a review, 
//sends a PUT request to the server to update the book's review when the form is submitted, 
//and navigates to the book's details page once the review is submitted.

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SubmitReview({id}) {
    //This line creates a state variable called review and a function to update it called setReview. 
    //The initial value of review is an empty string.
    const [review, setReview] = useState('');
    const navigate = useNavigate();

    //This function is called when the form is submitted. It prevents the page from refreshing, 
    //sends a PUT request to the server to update the book's review, and then navigates to the book's details page.
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ review })
        }).then(() => {
            navigate(`/books/${id}`);
        });
    };

    //renders a form with a textarea for the review and a submit button. 
    //The value of the textarea is bound to the review state, 
    //and the onChange handler updates the review state when the textarea's value changes.
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Review:
                <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default SubmitReview;