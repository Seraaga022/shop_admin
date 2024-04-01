import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";
import { ImageInput, ImageField } from "react-admin";

const MyCategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput
        source="description"
        multiline={true}
        label="description"
        validate={[required()]}
      />
      <TextInput
        source="PCI"
        multiline={true}
        label="parent category id OR empty if its parent"
        fullWidth
      />
      <ImageInput source="image" label="image">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default MyCategoryCreate;
