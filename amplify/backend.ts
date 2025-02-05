import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { document } from './storage/resource';



// This is the integration of the different auth servcies that are good to work with 
 const backend = defineBackend({
  auth,
  data,
  storage,
  document
});


backend.addOutput({

  data:{
    authorization_types: ["AMAZON_COGNITO_USER_POOLS"],
  },
  
});