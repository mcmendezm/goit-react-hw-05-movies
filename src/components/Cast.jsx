import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DivCard = styled.div`
  background-color: #f2d28b;
  border: 3px solid #000;
  padding: 20px;
  & h2 {
    font-weight: bold;
    font-size: 40px;
    font-family: cursive;
  }
`;
const ListCard = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ItemCard = styled.li`
  border: 3px solid #184475;
  padding: 10px;
  margin: 20px;
  list-style-type: none;
  width: 200px;
  border-radius: 10px;
`;

const Cast = () => {
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
    <DivCard>
      <h2>Cast</h2>
      <ListCard>
        {cast.map(actor => (
          <ItemCard key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />{' '}
            <br />
            <p>Nombre:{actor.name} </p>
            <p>Character: {actor.character}</p>
          </ItemCard>
        ))}
      </ListCard>
    </DivCard>
  );
};

export default Cast;
