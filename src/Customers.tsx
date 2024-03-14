import {
    CreateButton,
    Datagrid,
    FilterButton,
    FilterForm,
    List,
    TextField,
    TextInput,
    SearchInput,
    Pagination,
    ListBase,
} from 'react-admin';
import { Stack } from '@mui/material';

const CustomerFilters = [
    <SearchInput key={''} source="name" alwaysOn />,
    <TextInput key={''} label="email" source="email" defaultValue="your_email@gmail.com" />,
];
const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={CustomerFilters} />
        <div>
            <FilterButton filters={CustomerFilters} />
            <CreateButton />
        </div>
    </Stack>
)
export const CustomersList = () => (
    <List>
        <ListToolbar />
        <Datagrid rowClick="edit">
            <TextField source="customer_id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List>
);