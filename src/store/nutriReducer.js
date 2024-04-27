const initialState = {
  nutri: [],
  isLoading: false,
  error: null
};

export const actionTypes = {
  FETCH_NUTRI_REQUEST: 'FETCH_NUTRI_REQUEST',
  FETCH_NUTRI_SUCCESS: 'FETCH_NUTRI_SUCCESS',
  FETCH_NUTRI_FAILURE: 'FETCH_NUTRI_FAILURE'
};

export const fetchNutri = () => {
  return async dispatch => {
    dispatch({ type: actionTypes.FETCH_NUTRI_REQUEST });
    try {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      const response = await fetch(url);
      const json = await response.json();
      dispatch({ type: actionTypes.FETCH_NUTRI_SUCCESS, payload: json });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_NUTRI_FAILURE, payload: error });
    }
  };
};

export default function nutriReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_NUTRI_REQUEST:
      return { ...state, isLoading: true, error: null };
    case actionTypes.FETCH_NUTRI_SUCCESS:
      return { ...state, isLoading: false, nutri: action.payload };
    case actionTypes.FETCH_NUTRI_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
