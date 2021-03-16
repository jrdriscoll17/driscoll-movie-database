import axios from 'axios';

export const fetchMovies = search => dispatch => {
  dispatch({ type: 'FETCH_MOVIES_REQUEST' });
  axios(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`
  )
    .then(response => {
      dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data.Search });
    })
    .catch(errors => {
      dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: errors });
    });
};
