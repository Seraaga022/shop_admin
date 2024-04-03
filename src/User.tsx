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

const UserFilters = [
  <SearchInput key={""} source="username" alwaysOn />,
  <TextInput key={""} label="UserName" source="username" defaultValue="john" />,
];
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
      <TextField source="username" />
      <TextField source="password_hash" />
      <TextField source="email" />
    </Datagrid>
  </List>
);
