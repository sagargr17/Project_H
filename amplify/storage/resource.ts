import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'userBucket',
  access: (allow) => ({
    'profile-pictures/{tenant_id}/{resident_id_number}/*': [
      allow.groups(['admin']).to(['read', 'write', 'delete'])
      ,allow.authenticated.to(['read','write']   ) ,
      
    ],
  }
),
isDefault:true
});

export const document = defineStorage({
  name: "documentBucket",
  access: (allow) => ({
    'document/*': [allow.authenticated.to(['read', 'write', 'delete'])],
    'document/{tenant_id}/{resident_id_number}/*': [
      // allow.groups(['Admin']).to(['read', 'write', 'delete']),
      allow.authenticated.to(['read','write']   ) 
    ],
  })

}) 