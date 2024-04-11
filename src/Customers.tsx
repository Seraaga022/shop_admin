import {
  Datagrid,
  FilterButton,
  FilterForm,
  List,
  TextField,
  TextInput,
  SearchInput,
  // Pagination,
  // ListBase,
} from "react-admin";
import { Stack } from "@mui/material";

const CustomerFilters = [
  <SearchInput placeholder="name" key={""} source="name" alwaysOn />,
  <TextInput
    key={""}
    label="email"
    source="email"
    defaultValue="@example.com"
  />,
];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={CustomerFilters} />
    <div>
      <FilterButton filters={CustomerFilters} />
    </div>
  </Stack>
);
export const CustomersList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);
