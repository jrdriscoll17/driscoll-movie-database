import React from 'react';

const Movie = props => {
  return (
    <>
      <img src={props.movie.Poster} alt='movie poster' />
      <p className='label'>
        {props.movie.Title} ({props.movie.Year})
      </p>
    </>
  );
};

export default Movie;
