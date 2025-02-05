import { GET_LOGIN_SUCCESS } from "./ActionType";
import { Amplify  } from "aws-amplify";
import { signIn} from "aws-amplify/auth";
import { fetchAuthSession } from "aws-amplify/auth";







  export function loginConfirmedAction(data) {
    return {
        type: GET_LOGIN_SUCCESS,
        payload: data,
    };
}


  export const login = (userData, navigate) => async (dispatch) => {
    // dispatch({ type: GET_LOGIN_REQUEST });


    console.log("hittttttt");
    

    try {
        const user = await signIn({
            username: userData.email,
            password: userData.password,
          });
          console.log("hittttttt 1", user);
          if(user){
            console.log("hittttttt 2");
            const session = await fetchAuthSession();
            dispatch(loginConfirmedAction(session.tokens.idToken.payload));	

        if (session) {

            console.log("hittttttt 3");
        console.log("id token", session.tokens.accessToken);
        console.log(" payload", session.tokens.accessToken.payload);
        console.log("to string", session.tokens.accessToken.toString());
            localStorage.setItem("userDetails",JSON.stringify(session.tokens.accessToken))
            localStorage.setItem("userDetails-jwt",session.tokens.accessToken.toString())
            console.log(session.tokens.idToken);
            
            dispatch(loginConfirmedAction(session.tokens.accessToken));	
            
        //       dispatch({
        //     type: GET_LOGIN_SUCCESS,
        //     payload:session.tokens.idToken,
        // });
      } else {
        console.log("No Found");
      }
          }

         navigate('/');
        // dispatch({
        //     type: GET_LOGIN_SUCCESS,
        //     payload: response.signInUserSession.idToken.jwtToken,
        // });
    } catch (error) {
        console.log("hittttttt error",error.message); 
        const errorMessage =
            error.message || "An error occurred. Please try again.";
        // dispatch({ type: GET_LOGIN_FAILURE, payload: errorMessage });
    }
};