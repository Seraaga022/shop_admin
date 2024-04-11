import {
    Datagrid,
    FilterButton,
    FilterForm,
    List,
    TextField,
    SearchInput,
  } from "react-admin";
  import { Stack } from "@mui/material";
  
  const OrderDetailsFilters = [
    <SearchInput key={""} source="order_id" alwaysOn />,
  ];
  const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
      <FilterForm filters={OrderDetailsFilters} />
      <div>
        <FilterButton filters={OrderDetailsFilters} />
      </div>
    </Stack>
  );
  export const OrderDetailsList = () => (
    <List>
      <ListToolbar />
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="order_id" />
        <TextField source="product_id" />
        <TextField source="quantity" />
        <TextField source="price" />
      </Datagrid>
    </List>
  );
  