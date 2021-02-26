export default function fetchMovie(title, year) {
  return (dispatch) => {
    fetch('url')
      .then((r) => r.json())
      .then((movie) => {
        dispatch({ type: 'FETCH_MOVIE', payload: movie });
      });
  };
}
