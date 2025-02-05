import { GET_RESIDENT_FAILURE, GET_RESIDENT_REQUEST, GET_RESIDENT_SUCCESS } from "./ActionType";


const initialState = {
  listResidents: [],  // This will store resident objects with full details
  loading: false,
  error: null,
};

const residentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESIDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_RESIDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        listResidents: action.payload || [],  // Ensure data structure matches
      };

    case GET_RESIDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default residentReducer;
