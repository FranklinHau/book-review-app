
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
 
    const handleSubmit = (event) => {
        event.preventDefault();

        const book = { title, author, year, description, review, rating };

        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }).then(() => {
            navigate('/books');
        });

    };

    const handleHomeClick = () => {
        navigate('/');
    }

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
                Year:
                <input type='text' value={year} onChange={(e) => setYear(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Review:
                <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
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

export default AddBook; 