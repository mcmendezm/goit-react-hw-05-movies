import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  const API_KEY = 'ea4896c7073ba93706d570dd6a3e937d';
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    )
      .then(response => response.json())
      .then(data => setSearchResults(data.results))
      .catch(error => console.error('Error searching movies:', error));
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <div>
        <input
          type="text"
          placeholder="Enter keywords"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
