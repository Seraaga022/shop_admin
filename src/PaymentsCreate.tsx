// import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";
import { ImageInput, ImageField } from "react-admin";

const MyPaymentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="order_id" label="Order id" validate={[required()]} />
      <TextInput
        source="payment_method"
        label="Payment method"
        validate={[required()]}
      />
      <TextInput source="amount" label="Total amount" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default MyPaymentCreate;
