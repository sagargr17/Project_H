import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { addUserToGroup } from "./add-user-to-group/resource";



const schema = a.schema({  
  addUserToGroup: a
  .mutation()
  .arguments({
    userId: a.string().required(),
    groupName: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(addUserToGroup))
  .returns(a.json()),
  document: a
    .model({
      resident:a.string(),
      document: a.string(),
      end_date:a.datetime(),

    })
    .authorization((allow) => [allow.authenticated()] ),
    Tenant:a.model({
      tenant_name: a.string().required(),
      contact_email: a.email().required(),
      phone_number: a.phone(),
      address_line1: a.string(),
      address_line2: a.string(),
      city: a.string(),
      state: a.string(),
      postal_code: a.string(),
      country: a.string(),
      created_at: a.datetime(),
      is_active: a.boolean(), 
      tenant_admin:a.string(),
      resident :a.hasMany('Resident', 'tenant_id') 

    }).authorization((allow) => [allow.group("admin").to(["read","create"])] ),
    Resident:a.model({
        resident_id_number: a.id().required(),
        tenant_id:a.string().required(),
        tenant:  a.belongsTo('Tenant', 'tenant_id'),
        resident_full_name: a.string().required(),
        date_of_birth: a.date().required(),
        admission_agreement_signed: a.boolean(),
        medical_history_provided: a.boolean(),
        consent_forms_completed: a.boolean(),
        advance_directives_provided: a.boolean(),
        initial_assessment_completed: a.boolean(),
        dietary_needs_documented: a.boolean(),
        mobility_assistance_required: a.string(),
        personal_belongings_verified: a.boolean(),
        inventory_items_documented: a.string().array(),
        room_type_assigned: a.string(),
        room_orientation_preference: a.string(),
        emergency_contact_name: a.string(),
        relationship_to_resident: a.string(),
        contact_number: a.string(),
        staff_completing_checklist: a.string(),
        checklist_completion_date: a.datetime(),
        additional_comments: a.string(),
        created_at: a.datetime(),
        updated_at: a.datetime(),
        image_url: a.string(),
        medi_care: a.string(),
        status: a.boolean()
  })
}).authorization((allow) => [allow.group("admin").to(["read","create"])] );

export type Schema = ClientSchema<typeof schema>;

// Defined Data
export const data = defineData({
  schema: schema
});

