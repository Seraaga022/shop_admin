import {
  Datagrid,
  FilterButton,
  FilterForm,
  List,
  TextField,
  TextInput,
  SearchInput,
} from "react-admin";
import { Stack } from "@mui/material";

const OrderFilters = [
  <SearchInput key={""} placeholder="id" source="customer_id" alwaysOn />,
  <TextInput key={""} label="Status" source="status" defaultValue="pending" />,
];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={OrderFilters} />
    <div>
      <FilterButton filters={OrderFilters} />
    </div>
  </Stack>
);
export const OrderList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="customer_id" />
      <TextField source="total_amount" />
      <TextField source="quantity" label='Total quantity' />
      <TextField source="status" />
      <TextField source="order_date" />
    </Datagrid>
  </List>
);
