const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const fetchData = (query, name) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query);
      const { data } = await resp.json();
      dispatch(fetchDataSuccess({ name: name, data: data }));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

const initialState = {
  data: { search: null },
  loading: false,
  error: null,
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      state.data["search"] = null;
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      state.data[action.payload.name] = action.payload.data;
      console.log(state.data);
      return { ...state, loading: false, data: state.data };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default fetchDataReducer;
