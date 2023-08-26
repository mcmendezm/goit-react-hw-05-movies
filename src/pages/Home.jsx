import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const API_KEY = 'ea4896c7073ba93706d570dd6a3e937d';
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const filteredMovies = data.results.filter(movie => movie.title);
        setPopularMovies(filteredMovies);
      })
      .catch(error => console.error('Error fetching popular movies:', error));
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
