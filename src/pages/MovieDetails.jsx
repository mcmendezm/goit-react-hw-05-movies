import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

function MovieDetails() {
  const API_KEY = 'ea4896c7073ba93706d570dd6a3e937d';
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieId]);

  return (
    <div>
      <Link to="/">
        {' '}
        <button>Back</button>
      </Link>
      <div>
        {movieDetails && (
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div>
              <h2>
                {movieDetails.title} (
                {new Date(movieDetails.release_date).getFullYear()})
              </h2>
              <p>User Score: {movieDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="Reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <hr />
    </div>
  );
}

export default MovieDetails;
