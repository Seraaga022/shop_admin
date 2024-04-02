// import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";

const MyAddressCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="order_id" label="Order id" validate={[required()]} />
      <TextInput
        source="recipient_name"
        label="Recipient name"
        validate={[required()]}
      />
      <TextInput source="address" label="Address" validate={[required()]} />
      <TextInput source="state" label="State" validate={[required()]} />
      <TextInput source="country" label="Country" validate={[required()]} />
      <TextInput source="city" label="City" validate={[required()]} />
      <TextInput
        source="postal_code"
        label="Postal code"
        validate={[required()]}
      />
    </SimpleForm>
  </Create>
);

export default MyAddressCreate;
