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

const UserFilters = [<SearchInput key={""} source="name" placeholder="user name" alwaysOn />];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={UserFilters} />
    <div>
      <FilterButton filters={UserFilters} />
    </div>
  </Stack>
);
export const UserList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="name" />
      <TextField source="username" label="username hash" />
      <TextField source="password_hash" />
      <TextField source="email" />
      <TextField source="image" label='Image name' />
    </Datagrid>
  </List>
);
