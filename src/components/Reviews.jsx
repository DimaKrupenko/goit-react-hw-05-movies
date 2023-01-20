import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../services/api';

const Reviews = () => {
    const [movieId, setMovieId] = useState('');
    const [reviews, setReviews] = useState('');
  
    const { Id } = useParams();
    useEffect(() => {
        const getRevies = async () => {
            try {
        setMovieId(Id);
        API.setMovieId(movieId);
        
        if (movieId) {
        const reviewsMovies = await API.getRevies(); 
        setReviews(reviewsMovies);
        return
        }
         }
        catch (error) {
            console.log(error)
        }
       }
       getRevies()
    }, [movieId, Id])   
    return (
        <ul>
            {reviews && reviews.map(review => (
                <li key={review.id}>
                    <h2>{review.author}</h2>
                    {review.content}
                </li>
           ))}
        </ul>
    )
}

export default Reviews