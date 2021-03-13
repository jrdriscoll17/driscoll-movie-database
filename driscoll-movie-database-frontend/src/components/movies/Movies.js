import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

class Movies extends Component {
  render() {
    return (
      <>{console.log(this.props)}</>
      // <ul>
      //   {this.props.movies.map((movie) => (
      //     <li key={movie.id}>
      //       <Link component={Movie}>
      //         <img src={movie.Poster} alt='movie poster' />
      //         <p>{movie.Title}</p>
      //         <p>{movie.year}</p>
      //       </Link>
      //     </li>
      //   ))}
      // </ul>
    );
  }
}

export default Movies;
