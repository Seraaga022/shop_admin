import {
  Admin,
  Resource,
  ShowGuesser,
  defaultTheme,
  // EditGuesser,
  // ListGuesser,
} from "react-admin";
const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: "dark" } };

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import { CustomersList } from "./Customers";
import { CustomerCreate } from "./CustomerCreate";
import { CustomerEdit } from "./MyEdit";

import { CategoryList } from "./Categories";
import MyCategoryCreate from "./CategoryCreate";
import { CategoryEdit } from "./MyEdit";

import { ProductList } from "./Products";
import MyProductCreate from "./CreateProducts";
import { ProductEdit } from "./MyEdit";

import { PaymentList } from "./Payments";
import MyPaymentCreate from "./PaymentsCreate";
import { PaymentEdit } from "./MyEdit";

import { AddressList } from "./Address";
import MyAddressCreate from "./AddressCreate";
import { AddressEdit } from "./MyEdit";

import { AdminLogList } from './AdminLog'
import MyAdminLogCreate from './AdminLogCreate'
import { AdminLogEdit } from "./MyEdit";

import { OrderList } from './Order'
import MyOrderCreate from './OrderCreate'
import { OrderEdit } from './MyEdit'
 
import { FeedbackList } from './Feedback'
// import MyFeedbackCreate from './FeedbackCreate'
import { FeedbackEdit } from "./MyEdit";

export const App = () => (
  <Admin
    theme={lightTheme}
    darkTheme={darkTheme}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="customer"
      list={CustomersList}
      edit={CustomerEdit}
      show={ShowGuesser}
      create={CustomerCreate}
    />
    <Resource
      name="category"
      list={CategoryList}
      edit={CategoryEdit}
      show={ShowGuesser}
      create={MyCategoryCreate}
    />
    <Resource
      name="product"
      list={ProductList}
      edit={ProductEdit}
      show={ShowGuesser}
      create={MyProductCreate}
    />
    <Resource
      name="payment"
      list={PaymentList}
      edit={PaymentEdit}
      show={ShowGuesser}
      create={MyPaymentCreate}
    />
    <Resource
      name="address"
      list={AddressList}
      edit={AddressEdit}
      show={ShowGuesser}
      create={MyAddressCreate}
    />
    <Resource
      name="adminLog"
      list={AdminLogList}
      edit={AdminLogEdit}
      show={ShowGuesser}
      create={MyAdminLogCreate}
    />
    <Resource
      name="order"
      list={OrderList}
      edit={OrderEdit}
      show={ShowGuesser}
      create={MyOrderCreate}
    />
    <Resource
      name="feedback"
      list={FeedbackList}
      edit={FeedbackEdit}
      show={ShowGuesser}
      // create={MyFeedbackCreate}
    />
  </Admin>
);
