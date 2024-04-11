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

const FeedbackFilters = [
  <SearchInput key={""} placeholder='order id' source="order_id" alwaysOn />,
  <TextInput
    key={""}
    label="Customer name"
    source="customer_name"
    defaultValue="nelson"
  />,
  <TextInput key={""} label="Rating" source="rating" defaultValue="5" />,
];
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={FeedbackFilters} />
    <div>
      <FilterButton filters={FeedbackFilters} />
    </div>
  </Stack>
);
export const FeedbackList = () => (
  <List>
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="customer_id" />
      <TextField source="order_id" />
      <TextField source="rating" />
      <TextField source="comment" />
      <TextField source="feedback_date" />
    </Datagrid>
  </List>
);
