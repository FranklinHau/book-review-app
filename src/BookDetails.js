

import {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function BookDetails() {
    const [book, setBook] = useState(null);
    const [review, setReview] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(data => {
                setBook(data);
                setReview(data.review);
            });
        }, [id]);

    const handleSubmitReview = (event) => {
        event.preventDefault();

        const newReviews= [...book.reviews, review];

        const updatedBook = {...book, reviews: newReviews};

        fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBook)
    })
            .then (() => {
                setBook(updatedBook);
                navigate(`/books/${id}`);
            });
        };
    
    return book && (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>Year published  {book.year}</p>
            <p>Description:  {book.description}</p>
            <h2>Reviews:</h2>
            {book.reviews && book.reviews.map((review, index) => (
                <p key={index}>{review}</p>
            ))}
            <form onSubmit={handleSubmitReview}>
                <label>
                    Review:
                    <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
                </label>
                <button type='submit'>Submit Your Review</button>
            </form>
        </div>
    );
}

export default BookDetails; 