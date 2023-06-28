import { useState } from "react";

function StarRating({ rating, setRating}) {
    const [hover, setHover] = useState(0);

    return (
        <div className='star-rating-bottom' >
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                    return (
                        <label key={i} style={{ display: 'inline' }}>
                            <input 
                                type='radio'
                                name='rating'
                                value='{ratingValue}'
                                onClick={() => setRating(ratingValue)}
                                style={{ display: 'none'}}
                                />
                                <i
                                    className='fas fa-star'
                                    style={{ color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(0)}
                                    ></i>
                        </label>
                    );
            })}
        </div>
    );
}

export default StarRating;