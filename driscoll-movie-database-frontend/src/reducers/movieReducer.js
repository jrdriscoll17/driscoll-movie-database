const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return state;
    default:
      return null;
  }
};

export default reducer;
