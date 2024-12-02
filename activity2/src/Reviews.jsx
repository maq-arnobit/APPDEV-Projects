import React, { useState } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [game, setGame] = useState('');
    const [userReview, setUserReview] = useState('');
    const [reviewer, setReviewer] = useState('');
    const [rating, setRating] = useState('')

    const handleGameChange = (event) => {
        setGame(event.target.value)
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }

    const handleReviewChange = (event) => {
        setUserReview(event.target.value)
    }

    const handleReviewerChange = (event) => {
        setReviewer(event.target.value)
    }

    const addReview = () => {
        const newReview = {
            game_name: game,
            game_rating: rating,
            user_review: userReview,
            user_name: reviewer,
            date: new Date().toLocaleString()
        }
        setReviews([...reviews, newReview])
        setGame('')
        setRating('')
        setUserReview('')
        setReviewer('')
    }

    return(
        <>
        <div className='reviews-form'>
            <p>Game Name: </p><input type='text' value={game} onChange={handleGameChange}></input>
            <p>Rating: </p><input type='text' value={rating} onChange={handleRatingChange}></input>
            <p>Review:</p><textarea value={userReview} onChange={handleReviewChange}></textarea>
            <p>Your Reviewer Name: </p><input type='text' value={reviewer} onChange={handleReviewerChange}></input>
            <button onClick={addReview}>Submit</button>
        </div>
        <div className='reviews'>
            <h3>User reviews:</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <h4>{review.game_name} ({review.game_rating})</h4>
                        <p>{review.user_review}</p>
                        <small>- {review.user_name}, {review.date}</small>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}