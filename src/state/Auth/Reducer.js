import { GET_LOGIN_FAILURE, GET_LOGIN_SUCCESS } from "./ActionType";



const initialState = {
    auth: {
        email: '',
        idToken: '',
        // localId: '',
        exp: '',
        // refreshToken: '',
    },
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};




export function AuthReducer(state = initialState, action) {
    switch (action.type) {
       
      case GET_LOGIN_SUCCESS:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    email: action?.payload?.payload?.username,
                    // localId: action?.payload?.localId,
                    exp: action?.payload?.payload?.exp,
                    // refreshToken: action.payload?.refreshToken,
                    idToken: action?.payload?.toString(),
                },
                errorMessage: '',
                successMessage: 'Login Successfully Completed',
                showLoading: false,
            };

      
        case GET_LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                successMessage: '',
                showLoading: false,
            };

        default:
            return state;
    }
}