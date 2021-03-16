const initialState = {
  loading: false,
  movies: [],
  errors: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, loading: false, movies: action.payload, errors: [] };
    case 'FETCH_MOVIES_FAILURE':
      return { ...state, loading: false, movies: [], errors: [action.payload] };
    default:
      return state;
  }
};

export default movieReducer;
