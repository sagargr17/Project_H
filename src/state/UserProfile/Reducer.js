
// import { 
//     GET_USERDATA_REQUEST, GET_USERDATA_SUCCESS, GET_USERSIGNINDATA_SUCCESS } from "./ActionType";

import { GET_USERSIGNINDATA_FAILURE, GET_USERSIGNINDATA_REQUEST, GET_USERSIGNINDATA_SUCCESS } from "./ActionType";


const initialState = {
  userSignIndata:null,
//   userDetailsInfo:null,
  loading: false,
  error: null,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_USERSI_REQUEST:
    case GET_USERSIGNINDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // case GET_USERDATA_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     userDetailsInfo: action.payload  
    //   };

      case GET_USERSIGNINDATA_SUCCESS:
        return {
          ...state,
          loading: false,
          userSignIndata: action.payload  
        };
    case GET_USERSIGNINDATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default signInReducer;
