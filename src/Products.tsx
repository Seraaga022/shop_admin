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

const ProductFilters = [
  <SearchInput key={""} source="name" alwaysOn />,
  <TextInput key={""} label="name" source="name" defaultValue="mobile3" />,
];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={ProductFilters} />
    <div>
      <FilterButton filters={ProductFilters} />
    </div>
  </Stack>
);
export const ProductList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="price" />
      <TextField source="Cat" />
    </Datagrid>
  </List>
);
