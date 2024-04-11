// import React from "react";
import { Edit, SimpleForm, TextInput, useRecordContext } from "react-admin";
import { ImageInput, ImageField } from "react-admin";

export const CustomerEdit = (props) => {
  // const record = useRecordContext();
  // const imageToShow = record?.image_for_show;

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone" />
        {/* {imageToShow && (
          <img
            src={record.image_for_show}
            width={100}
            height={100}
            title="current image"
            alt="current image"
          ></img>
        )} */}
        <ImageInput source="image" label="image">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const ProductEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="description" />
        <TextInput source="price" />
        <TextInput source="Cat" />
        <ImageInput source="image" label="image">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const CategoryEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="description" />
        <TextInput source="PCI" />
        <ImageInput source="image" label="image">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const PaymentEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="order_id" />
        <TextInput source="payment_method" />
        <TextInput source="amount" />
      </SimpleForm>
    </Edit>
  );
};

export const AddressEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="order_id" />
        <TextInput source="recipient_name" />
        <TextInput source="address" />
        <TextInput source="state" />
        <TextInput source="country" />
        <TextInput source="city" />
        <TextInput source="postal_code" />
      </SimpleForm>
    </Edit>
  );
};

export const AdminLogEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="user_id" />
        <TextInput source="action" />
        <TextInput source="ip_address" />
      </SimpleForm>
    </Edit>
  );
};

export const OrderEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="customer_id" />
        <TextInput source="total_amount" />
        <TextInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="password_hash" />
        <TextInput source="email" />
        <ImageInput source="image" label="image">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const FeedbackEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput /* multiline */ fullWidth disabled source="comment" />
        <TextInput disabled source="rating" />
        <TextInput source="ans" />
      </SimpleForm>
    </Edit>
  );
};

export const OrderDetailsEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="order_id" />
        <TextInput source="product_id" />
        <TextInput source="quantity" />
        <TextInput source="price" />
      </SimpleForm>
    </Edit>
  );
};
