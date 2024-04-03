// import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";

const MyAdminLogCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user_id" label="User id" validate={[required()]} />
      <TextInput source="action" label="Action" validate={[required()]} />
      <TextInput source="ip_address" label="Ip address" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default MyAdminLogCreate;
