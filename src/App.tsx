// import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { confirmResetPassword, fetchAuthSession, resetPassword, signIn, signOut, signUp } from 'aws-amplify/auth'
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useState } from "react";
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
import 'react-quill/dist/quill.snow.css';
import 'react-circular-progressbar/dist/styles.css';
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import NavigationProvider from './contentApi/navigationProvider';
import SideBarToggleProvider from './contentApi/sideBarToggleProvider';
import ThemeCustomizer from './components/shared/ThemeCustomizer';


function App() {
  
  const createTodo = async () => {
    const client = generateClient<Schema>();

    await client.models.document.create({
      resident: window.prompt("Residennt  ID?"),
      document:"document",
      
    },
  )
}

const  getUser =async ()=>{
    const { username, userId, signInDetails,  } = await getCurrentUser();
    const userFULLINFO  = await fetchUserAttributes()

  

    console.log("username", username);
    console.log("user id", userId);
    console.log("sign-in details", signInDetails);
    console.log("USER FULL INFO", userFULLINFO);
  }

  const [file, setFile] = useState<any>();

  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  };


  const loginn = async () =>{
    await signIn({
      username: "nishant.pantha25@gmail.com",
      password: "Arniko@123#",
    })
    console.log("REsullt", signIn)
  }



  const [session, setSession] = useState('')
  const [userName, setUsername] = useState('')
  const [resident_id_number, setresident_id_number] = useState('')

  const LoginToUSer = async () => {
    // AWS.Amplify.
    console.log("Logging.....");

    const user = await signIn({
      username: "nishant.pantha25@gmail.com",
      password: "Arniko@123#",
    });

    console.log("Login Status!", user);
  };


  const signOutAccountn =async ()=>{
    console.log("LOGOUED")
    let response  = await signOut()
    // console.log("Responsne::", await response)

  }



//   const fetchResident = async (resident_id:string) => {  
//     console.log("Hitting the lambda ....", session)
//     const client = generateClient();
//     const result = await client.graphql({
//       query: GET_RESIDENT,
//       authToken: `Bearer ${session}`,
      
//     }).then(r=>console.log("Result", r)).catch(p => console.log("www", p))

//     console.log("Result>>>", result)
// };


const createResident = async () => {  
  console.log("Resident....", userName, resident_id_number  )
  let variables =  {
    tenant_id: "14fb510d-b7e6-4828-98c4-943ab92c221d", 
    resident_full_name: userName, 
    resident_id_number: resident_id_number,
    date_of_birth: "1985-05-15",
    admission_agreement_signed: false,
    medical_history_provided: false,
    consent_forms_completed: false,
    advance_directives_provided: false,
    initial_assessment_completed: false,
    dietary_needs_documented: false,
    mobility_assistance_required: "asdsad",
    personal_belongings_verified: false,  
    room_orientation_preference: "asdsad",
    relationship_to_resident: "asdsad", 
    contact_number: "asdsad",
    staff_completing_checklist: "asdasdsad",
    checklist_completion_date: "2022-08-09",
    room_type_assigned: "ward"
  }
}

  // let input = {
  //             'tenant_id': '14fb510d-b7e6-4828-98c4-943ab92c221d', 
  //             'resident_full_name': 'Nishant Bhai', 
  //           ' ': 'A12345892123200',
  //             'date_of_birth': "1985-05-15",
  //            'admission_agreement_signed': False,
  //              'medical_history_provided': False,
  //            'consent_forms_completed': False,
  //              'advance_directives_provided': False,
  //           'initial_assessment_completed': False,
  //              'dietary_needs_documented': False,
  //            'mobility_assistance_required': "asdsad",
  //        'personal_belongings_verified': False,
  //           'inventory_items_documented': '{"ring"}',  
  //            'room_type_assigned': "sadsad",
  //            'room_orientation_preference': "asdsad",
  //            'relationship_to_resident': "asdsad",
  //            'contact_number': "asdsad",
  //           'staff_completing_checklist': "asdasdsad",
  //             'checklist_completion_date': "2022-08-09"
  //    }


  const client = generateClient();
  

  const signnuphandle = async () => {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: "nishantpattha",
      password: "Nepal@123#",
      options: {
        userAttributes: {
          email: "nishant.pantha25@gmail.com",
          phone_number: "+9779841150390",
          address: "butwal",
          birthdate: "2000 06 02",
          gender: "male",
          given_name: "sagargr17",
          family_name: "butwal",
          middle_name: "sunar",
          picture:
            "https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?t=st=1735898783~exp=1735902383~hmac=aec4b0bb119a4752a9fff5d2e59bac5c1517849d6c240e1a5ee64f02278293df&w=740",
          "custom:tenantId":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2ODUwNzEwMDAsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJjdXN0b21DbGFpbXMiOnsiZGF0YSI6IkV4YW1wbGUgY2xhaW0gZGF0YSBmb3IgdG9rZW4gbGVuZ3RoIHZlcmlmaWNhdGlvbiJ9LCJhdWRpZW5jZXMiOlsiYXBwbGljYXRpb25fMSIsImFwcGxpY2F0aW9uXzIiLCJhcHBsaWNhdGlvbl8zIl0sImZlYXR1cmVzIjp7ImFjY2VzcyI6InJlc3RyaWN0ZWQiLCJhdXRob3JpemVkIjoiZ3JhbnRlZCJ9LCJzdXBlcmxvbmdjb25maXJtZWRkYXRhIjoiQXV0aGVudGljYXRpb25zIHNob3VsZCBpbmNsdWRlIHZhcmlvdXMgaG9zdCByZWxhdGVkIGRhdGEgdG8gdmVyaWZ5IHRoZSBlbnRpcmUgZXhwZXJpZW5jZS4gVGhpcyBjb25maXJtYXRpb24gdG9rZW4gY2FuIGJlIGxvbmcgZXhwbGFuYXRvcnkuIn0sInNhbXBsZVRleHRGaWxsZXIiOiJBIGp3dCB0aGF0IG1lZXRzIHRoZSBtaW5pbXVtIHJlcXVpcmVkIGNoYXJhY3RlciBjb3VudCBmb3IgdmFsaWQgdG9rZW5zIGFuZCBjYW4gYmUgcmVmb3JtYXR0ZWQgd2l0aCBkZXNpZ25hdGVkIHNlY3VyaXR5IG11bHRpcGxlIHNjaGVtYXMgdG8gc3VpdCBleHBlcmltZW50YWwgbmVlZHMuIn0.gE7WQlYH07KMNFhSR9X_ZnOnLHOu6t1uR-5H4QQ62JAasdsadasdasdasdaseyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2ODUwNzEwMDAsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJjdXN0b21DbGFpbXMiOnsiZGF0YSI6IkV4YW1wbGUgY2xhaW0gZGF0YSBmb3IgdG9rZW4gbGVuZ3RoIHZlcmlmaWNhdGlvbiJ9LCJhdWRpZW5jZXMiOlsiYXBwbGljYXRpb25fMSIsImFwcGxpY2F0aW9uXzIiLCJhcHBsaWNhdGlvbl8zIl0sImZlYXR1cmVzIjp7ImFjY2VzcyI6InJlc3RyaWN0ZWQiLCJhdXRob3JpemVkIjoiZ3JhbnRlZCJ9LCJzdXBlcmxvbmdjb25maXJtZWRkYXRhIjoiQXV0aGVudGljYXRpb25zIHNob3VsZCBpbmNsdWRlIHZhcmlvdXMgaG9zdCByZWxhdGVkIGRhdGEgdG8gdmVyaWZ5IHRoZSBlbnRpcmUgZXhwZXJpZW5jZS4gVGhpcyBjb25maXJtYXRpb24gdG9rZW4gY2FuIGJlIGxvbmcgZXhwbGFuYXRvcnkuIn0sInNhbXBsZVRleHRGaWxsZXIiOiJBIGp3dCB0aGF0IG1lZXRzIHRoZSBtaW5pbXVtIHJlcXVpcmVkIGNoYXJhY3RlciBjb3VudCBmb3IgdmFsaWQgdG9rZW5zIGFuZCBjYW4gYmUgcmVmb3JtYXR0ZWQgd2l0aCBkZXNpZ25hdGVkIHNlY3VyaXR5IG11bHRpcGxlIHNjaGVtYXMgdG8gc3VpdCBleHBlcmltZW50YWwgbmVlZHMuIn0.gE7WQlYH07KMNFhSR9X_ZnOnLHOu6t1uR-5H4QQ62JAasdsadasdasdasdasasdsadsadsadsadsadsadsadsadasdsadsadsadsadsadsadsadsadsadsadsadasdsadsadasdasdasdasdss",
        },
      },
      // options: {
      //   userAttributes: {
      //     email: "sagargahatraj17@gmail.com",
      //     phone_number: "+9779841150390", // E.164 number convention
      //   },
      // },
    });

    console.log("Creater", nextStep, isSignUpComplete, userId);
  };

  async function confirmationPassword(otp:any) {
    console.log("OTTPPP", otp);
    let x = await confirmResetPassword({
      username: "nishant.pantha25@gmail.com",
      confirmationCode: `${otp}`,
      newPassword: "Arniko@123#",
    });

    console.log("Status", x);
  }

  async function currentSession() {
    try {
      const session:any = await fetchAuthSession();

      if (session) {
        console.log("id token", session?.tokens.accessToken.toString());

        setSession(session?.tokens.accessToken.toString())
        console.log("id token", session.tokens.idToken);


        // console.log("access token", session.tokens.accessToken);
      } else {
        console.log("No Found");
      }
    } catch (err) {
      console.log(err);
    }
  }



  // const [data, setData] = useState("");
  async function handleResetPassword(param:any) {
    console.log(">>>", param);
    const output = await resetPassword({
      // username: "nishant.pantha25@gmail.com",
      username: param,
    });

    const { nextStep } = output;

    console.log("NEXT>>", nextStep);
    switch (nextStep.resetPasswordStep) {
      case "CONFIRM_RESET_PASSWORD_WITH_CODE":
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case "DONE":
        console.log("Successfully reset password.");
        break;
    }
  }

  const [otp, setOTP] = useState("");

  
  return (
  // <div>
  //   <button onClick={loginn}>Loginn</button>
  //   <button onClick={getUser}>GEt USer</button>
  //   <h1>ADd too create</h1>
  //   <button onClick={createTodo}>Add new todo</button>
  //   <div>
  //     <input type="file" onChange={handleChange} />
  //       <button
  //         onClick={() =>
  //           uploadData({
  //             path: `documentBucket/asdsad/asdasdsad/${file}`,
  //             data: file,
  //         })
  //       }
  //     >
  //       Upload
  //     </button>
  //   </div>

  //       {/* This below is for the AWS services */}
  //   <div
  //     style={{
  //       margin: 200,
  //     }}
  //   >
  //     <button onClick={() => currentSession()}>Get Jwt </button>
  //     <p>Testttt</p>
  //     <button onClick={() => LoginToUSer()}>Loginnnnn</button>
  //     <button onClick={() => signOutAccountn()}>Logout</button>
  //     <button
  //       onClick={async () => handleResetPassword("nishant.pantha25@gmail.com")}
  //     >
  //       Get PASSWORD TOken
  //     </button>
  //     <p>{otp.length > 0 ? otp : "No Found"}</p>
  //     <input
  //       placeholder="otp"
  //       onChange={(e) => {
  //         console.log("Result:::", e.target.value);
  //         setOTP(e.target.value);
  //       }}
  //     ></input>
  //     <button onClick={() => confirmationPassword(otp)}>
  //       ConnfirmResetPassword
  //     </button>

  //     <button onClick={() => signnuphandle()}>Sign UP</button>
  //     {/* <button onClick={() => fetchResident("sgasd")}>Get Resident </button> */}
  //     <br></br>
  //     <input placeholder="Your Name" onChange={e => setUsername(e.target.value)}></input>
  //     <input placeholder="User resident Number " onChange={e => setresident_id_number(e.target.value)}></input>
  //     <button onClick={() => createResident()}>Create Resident </button>

  //   </div>
  // </div>
  <>
  <NavigationProvider>
    <SideBarToggleProvider>
      <RouterProvider router={router} />
    </SideBarToggleProvider>
  </NavigationProvider>
  <ThemeCustomizer />
</>
  )
}

export default App;
