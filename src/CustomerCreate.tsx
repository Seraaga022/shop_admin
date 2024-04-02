// import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  required /* DateInput */,
} from "react-admin";
import { ImageInput, ImageField } from "react-admin";

export const CustomerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="phone" multiline={true} label="phone" />
      <TextInput source="email" multiline={true} label="email" />
      <ImageInput source="image" label="image">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
