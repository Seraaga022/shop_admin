import {
  CreateButton,
  Datagrid,
  FilterButton,
  FilterForm,
  List,
  TextField,
  TextInput,
  SearchInput,
  ImageInput,
  ImageField,
  // Pagination,
  // ListBase,
} from "react-admin";
import { Stack } from "@mui/material";

const CategoryFilters = [
  <SearchInput key={""} source="name" alwaysOn />,
  <TextInput key={""} label="name" source="name" defaultValue="mobile" />,
];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={CategoryFilters} />
    <div>
      <FilterButton filters={CategoryFilters} />
    </div>
  </Stack>
);
export const CategoryList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="PCI" />
    </Datagrid>
  </List>
);
