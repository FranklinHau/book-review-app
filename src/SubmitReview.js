import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function SubmitReview() {
    const [review, setReview] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Review:
                <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
            </label>
            <button type='submit'>Submit Review</button>
        </form>
    );
}

export default SubmitReview;