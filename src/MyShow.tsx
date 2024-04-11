import * as React from "react";
import { Show, SimpleShowLayout, TextField, ImageField } from "react-admin";

export const OrderShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout className="fs-5">
        <h1>invoice</h1>
        <TextField source="id" />
        <TextField source="customer_id" />
        <TextField source="total_amount" />
        <TextField source="quantity" label="Total quantity" />
        <TextField source="status" />
        <TextField source="order_date" />
      </SimpleShowLayout>
    </Show>
  );
};
