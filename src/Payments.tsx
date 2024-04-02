import {
  // CreateButton,
  Datagrid,
  FilterButton,
  FilterForm,
  List,
  TextField,
  TextInput,
  SearchInput,
  // ImageInput,
  // ImageField,
  // Pagination,
  // ListBase,
} from "react-admin";
import { Stack } from "@mui/material";

const PaymentFilters = [
  <SearchInput key={""} source="order_id" alwaysOn />,
  <TextInput key={""} label="order id" source="order_id" defaultValue="1" />,
  <TextInput
    key={""}
    label="payment method"
    source="payment_method"
    defaultValue="online"
  />,
  <TextInput
    key={""}
    label="payment date"
    source="payment_date"
    defaultValue="1"
  />,
];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={PaymentFilters} />
    <div>
      <FilterButton filters={PaymentFilters} />
    </div>
  </Stack>
);
export const PaymentList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="order_id" />
      <TextField source="payment_method" />
      <TextField source="amount" />
      <TextField source="payment_date" />
    </Datagrid>
  </List>
);
