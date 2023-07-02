//This component displays a star rating system and allows users to select a rating. The selected rating is stored in the rating state, 
//and the star that the user is currently hovering over is stored in the hover state.

import { useState } from "react";



function StarRating({ rating, setRating }) {
    const [hover, setHover] = useState(0);  //This line creates a state variable called hover and a function to update it called setHover.
    //The initial value of hover is 0. This state is used to keep track of which star the user is currently hovering over.

    // renders a div that contains five radio buttons and star icons. 
    //The radio buttons are hidden, and the star icons are displayed in their place.
    return (
        <div className='star-rating-bottom' >
            {[...Array(5)].map((star, i) => {  //This line creates an array of five undefined elements, then maps over the array to create five radio buttons and star icons.
                const ratingValue = i + 1; //ratingValue that represents the rating value of the current star

                return (
                    <label key={i} style={{ display: 'inline' }}>
                        <input
                            type='radio'
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)} //This sets the rating state to ratingValue when the radio button is clicked
                            style={{ display: 'none' }}
                        />
                        <i
                            className='fas fa-star'
                            //This sets the color of the star icon. 
                            //If ratingValue is less than or equal to hover or rating, the color is '#ffc107' (gold). Otherwise, the color is '#e4e5e9' (grey).
                            style={{ color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }}
                            onMouseEnter={() => setHover(ratingValue)} //This sets the hover state to ratingValue when the mouse enters the star icon.
                            onMouseLeave={() => setHover(0)} //This resets the hover state to 0 when the mouse leaves the star icon.
                        ></i>
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;