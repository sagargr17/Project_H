import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';


// This is the integration of the defined auths that are kept here 
defineBackend({
  auth,
  data,
});
