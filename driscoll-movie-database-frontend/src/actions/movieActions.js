import axios from 'axios';

export function fetchMovies() {
  return function (dispatch) {
    axios
      .get('http://www.omdbapi.com/?apikey=[yourkey]&')
      .then(response => {
        dispatch({ type: 'FETCH_MOVIES', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_MOVIES_ERROR', payload: err });
      });
  };
}
