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
  
  const AdminLogFilters = [
    <SearchInput key={""} source="user_id" alwaysOn />,
    <TextInput key={""} label="user id" source="user_id" defaultValue="" />,
    <TextInput key={""} label="action" source="action" />,
    <TextInput key={""} label="action_date" source="action_date" />,
  ];
  const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
      <FilterForm filters={AdminLogFilters} />
      <div>
        <FilterButton filters={AdminLogFilters} />
      </div>
    </Stack>
  );
  export const AdminLogList = () => (
    <List>
      <ListToolbar />
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="user_id" />
        <TextField source="action" />
        <TextField source="action_date" />
        <TextField source="ip_address" />
      </Datagrid>
    </List>
  );
  