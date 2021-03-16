import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Movie.css';
// import Movie from './Movie';

class Movies extends Component {
  render() {
    // debugger;
    return (
      <div className='movie-list-container'>
        <ul className='movie-list'>
          {this.props.movies.map((movie, index) => (
            <li key={index} className='movie-list-item'>
              <img src={movie.Poster} alt='movie poster' />
              <p className='label'>
                {movie.Title} ({movie.Year})
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ movieReducer: { movies } }) => {
  return {
    movies,
  };
};

export default connect(mapStateToProps)(Movies);
