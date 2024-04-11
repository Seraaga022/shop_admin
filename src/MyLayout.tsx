// import React from 'react';
import { Layout } from 'react-admin';
import Nav from './Navbar';
import SideBar from './CustomSidebar'

const MyLayout = (props) => (
    <Layout {...props} appBar={Nav} sidebar={SideBar} />
);

export default MyLayout;