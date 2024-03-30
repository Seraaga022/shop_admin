import React from 'react';
import { Show, SimpleShowLayout, TextField, ImageField } from 'react-admin';

const MyShowGuesser = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="image" title="Image" />
        </SimpleShowLayout>
    </Show>
);

export default MyShowGuesser;