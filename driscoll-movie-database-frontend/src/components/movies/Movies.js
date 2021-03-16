import React from 'react';
import { connect } from 'react-redux';
import './Movie.css';
import Movie from './Movie';

const Movies = props => {
  return (
    <div className='movie-list-container'>
      <ul className='movie-list'>
        {props.movies.map((movie, index) => (
          <li key={index} className='movie-list-item'>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ movieReducer: { movies } }) => {
  return {
    movies,
  };
};

export default connect(mapStateToProps)(Movies);
