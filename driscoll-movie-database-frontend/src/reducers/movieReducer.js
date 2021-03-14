const initialState = {
  loading: false,
  movies: [],
  errors: [],
  // redirectTo: '',
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, loading: false, movies: action.payload, errors: [] };
    case 'FETCH_MOVIES_FAILURE':
      return { ...state, loading: false, movies: [], errors: [action.payload] };
    // case 'REDIRECT':
    //   return { ...state, redirectTo: action.payload };
    default:
      return state;
  }
}
