

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
    return book && (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.description}</p>
            <p>{book.review}</p>
            <button onClick={() => navigate(`/books/${book.id}/review`)}>Submit Your Review</button>
            ,
        </div>
    );
}

export default BookDetails; 