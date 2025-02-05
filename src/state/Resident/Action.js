import { Amplify } from "aws-amplify";
import { GET_RESIDENT_FAILURE, GET_RESIDENT_REQUEST, GET_RESIDENT_SUCCESS } from "./ActionType";
import { generateClient } from 'aws-amplify/api';



Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: "us-east-1_d6LJ5JiH9", // Replace with your User Pool ID
        userPoolClientId: "5hd3ddgr6tl8ea5i95go3l92tq",    //THis is need  for the  login
        region: "us-east-1", // Replace with your region
      },
    },
    API:{
      GraphQL:{
        endpoint: "https://3zvlilumzvd2xm3bxwihhextku.appsync-api.us-east-1.amazonaws.com/graphql",
        region: 'us-east-1',
        defaultAuthMode: "userPool",
      }
    }
  });


export const GET_RESIDENT =  `
  query {
    listResidents {
      resident_id_number
      resident_full_name
      room_orientation_preference
      relationship_to_resident
      contact_number
      staff_completing_checklist
    }
  }
`;

export const fetchResident = (session) => async (dispatch) => {  
    dispatch({type:GET_RESIDENT_REQUEST})
        try{
        console.log("Hitting the lambda ....", session)
        const client = generateClient();
        const result = await client.graphql({
          query: GET_RESIDENT,
          authToken: `Bearer ${session}`,
          
        })
        console.log("result  --- ",result);
        
        dispatch({type:GET_RESIDENT_SUCCESS,payload:result?.data?.listResidents})
    }catch(error){
        const errorMessage =
        error.message || "An error occurred. Please try again.";
        dispatch({type:GET_RESIDENT_FAILURE,payload:errorMessage})
        console.log(error.message)
    }
    
        }



