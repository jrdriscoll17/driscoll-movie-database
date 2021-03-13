import axios from 'axios';

export const fetchMovies = (search) => (dispatch) => {
  axios(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`
  )
    .then((response) => {
      dispatch({
        type: 'FETCH_MOVIES',
        payload: response.data.Search,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
