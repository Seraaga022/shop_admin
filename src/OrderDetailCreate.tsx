// import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";

const MyOrderDetailsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="order_id" validate={[required()]} label='order_id' />
      <TextInput source="product_id" validate={[required()]} label='product_id' />
      <TextInput source="quantity" validate={[required()]} label='quantity' />
      <TextInput source="price" validate={[required()]} label='price' />
    </SimpleForm>
  </Create>
);

export default MyOrderDetailsCreate;
