import {
  Datagrid,
  FilterButton,
  FilterForm,
  List,
  TextField,
  // TextInput,
  SearchInput,
} from "react-admin";
import { Stack } from "@mui/material";

const AddressFilters = [
  <SearchInput key={""} source="order_id" placeholder="order id" alwaysOn />,
];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={AddressFilters} />
    <div>
      <FilterButton filters={AddressFilters} />
    </div>
  </Stack>
);
export const AddressList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="order_id" />
      <TextField source="recipient_name" />
      <TextField source="address" />
      <TextField source="state" />
      <TextField source="country" />
      <TextField source="city" />
      <TextField source="postal_code" />
    </Datagrid>
  </List>
);
