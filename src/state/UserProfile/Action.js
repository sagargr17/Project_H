
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
// import { fetchUserAttributes } from 'aws-amplify/auth';
// import { GET_USERDATA_FAILURE, GET_USERDATA_REQUEST, GET_USERDATA_SUCCESS, 
   import{ GET_USERSIGNINDATA_FAILURE, 
    GET_USERSIGNINDATA_REQUEST, 
    GET_USERSIGNINDATA_SUCCESS } from './ActionType';



// Amplify.configure({
//     Auth: {
//       Cognito: {
//         userPoolId: "us-east-1_d6LJ5JiH9", // Replace with your User Pool ID
//         userPoolClientId: "5hd3ddgr6tl8ea5i95go3l92tq",    //THis is need  for the  login
//         region: "us-east-1", // Replace with your region
//       },
//     },
//     API:{
//       GraphQL:{
//         endpoint: "https://3zvlilumzvd2xm3bxwihhextku.appsync-api.us-east-1.amazonaws.com/graphql",
//         region: 'us-east-1',
//         defaultAuthMode: "userPool",
//       }
//     }
//   });

export const getUser = () => async (dispatch) => {  
    // dispatch({type:GET_USERDATA_REQUEST})
    dispatch({type:GET_USERSIGNINDATA_REQUEST})
        try{
            const UserData= await getCurrentUser();
            // const userFULLINFO  = await fetchUserAttributes()
            console.log("--------",UserData);
            
            // console.log("USER FULL INFO", userFULLINFO);
        dispatch({type:GET_USERSIGNINDATA_SUCCESS,payload:UserData})
    }catch(error){
        const errorMessage =
        error.message || "An error occurred. Please try again.";
        // dispatch({type:GET_USERDATA_FAILURE,payload:errorMessage})
        dispatch({type:GET_USERSIGNINDATA_FAILURE,payload:errorMessage})
        console.log(error.message)
    }
    
        }
   


