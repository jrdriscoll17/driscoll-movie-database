// import React, { PureComponent } from 'react';
// // import Movie from './Movie';
// import Movies from './Movies';
// import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchMovies } from '../../actions/movieActions';

// class MovieContainer extends PureComponent {
//   componentDidMount() {
//     this.props.fetchMovies();
//   }

//   render() {
//     return (
//       <Switch>
//         <Route exact path='/movies'>
//           <Movies movies={this.props.movies} />
//         </Route>
//       </Switch>
//     );
//   }
// }

// const mapStateToProps = ({ movies }) => {
//   return {
//     movies,
//   };
// };

// export default connect(mapStateToProps, { fetchMovies })(MovieContainer);
