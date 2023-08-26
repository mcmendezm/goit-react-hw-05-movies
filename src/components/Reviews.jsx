import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const API_KEY = 'ea4896c7073ba93706d570dd6a3e937d';
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
