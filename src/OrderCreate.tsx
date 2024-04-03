// import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";

const MyOrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        source="customer_id"
        label="Customer id"
        validate={[required()]}
      />
      <TextInput
        source="total_amount"
        label="Total amount"
        validate={[required()]}
      />
      <TextInput source="status" label="Status" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default MyOrderCreate;
