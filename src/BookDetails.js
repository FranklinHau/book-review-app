

import {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
//import { useNavigate } from "react-router-dom";


function BookDetails({ newBookAdded, setNewBookAdded }) {
    const [book, setBook] = useState(null);
    const [review, setReview] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);

    const handleHomeClick = () => {
        navigate('/');
    };

    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(data => {
                setBook(data);
                });
        }, [id, newBookAdded]);
    

    const handleSubmitReview = (event) => {
        event.preventDefault();

        const newReviews= [...book.reviews, {text: review, rating: rating }];

        const updatedBook = {...book, reviews: newReviews};

        fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBook)
    })
            .then (() => {
                setBook(updatedBook);
                setReview('');
                setRating(0);
                setNewBookAdded(true);
                navigate(`/books/${id}`);
            });
        };
    
    return book && (
        <div className='book-details-container'>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>Year published:  {book.year}</p>
            <p>Description:  {book.description}</p>
            <h2>Reviews:</h2>
            {Array.isArray(book.reviews) && book.reviews.map((review, index) => (
                 <div key={index}>
                 <p>{review.text}</p>
                 <p>{review.rating}</p>
             </div>
            ))}
            <form onSubmit={handleSubmitReview}>
                <label>
                    Your Review:
                    <textarea className='only-review' value={review} onChange={(e) => setReview(e.target.value)} required />
                </label>
                <StarRating rating={rating} setRating={setRating} />
                <button type='submit'>Submit Your Review</button>
                <button type='button' onClick={handleHomeClick} style={{ marginLeft: '30px'}}>Home</button>
            </form>
        </div>
    );
}

export default BookDetails; 