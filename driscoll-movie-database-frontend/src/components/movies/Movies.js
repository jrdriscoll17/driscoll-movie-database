import React, { Component } from 'react';
// import Movie from './Movie';

class Movies extends Component {
  render() {
    debugger;
    return (
      <ul>
        {this.props.movies.map((movie, index) => (
          <li key={index}>
            <img src={movie.Poster} alt='movie poster' />
            <p>{movie.Title}</p>
            <p>{movie.year}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Movies;
