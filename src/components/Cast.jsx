import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const API_KEY = 'ea4896c7073ba93706d570dd6a3e937d';
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setCast(data.cast))
      .catch(error => console.error('Error fetching cast:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />{' '}
            <br />
            <p>Nombre:{actor.name} </p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
