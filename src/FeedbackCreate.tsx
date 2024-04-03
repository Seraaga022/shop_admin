import { Create, SimpleForm, TextInput, required } from "react-admin";
// import { ImageInput, ImageField } from "react-admin";

const MyPaymentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" label="UserName" validate={[required()]} />
      <TextInput
        source="password_hash"
        label="Password"
        validate={[required()]}
      />
      <TextInput source="email" label="Email" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default MyPaymentCreate;
