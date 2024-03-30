import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  defaultTheme,
  // ListGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { CustomersList } from "./Customers";
import { CustomerCreate } from "./CustomerCreate";

import { CategoryList } from "./Categories";
import MyCategoryCreate from "./CategoryCreate";
// import MyEditGuesser from "./MyEditGuesser";

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: "dark" } };

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
      edit={EditGuesser}
      show={ShowGuesser}
      create={CustomerCreate}
    />
    <Resource
      name="category"
      list={CategoryList}
      edit={EditGuesser}
      // edit={MyEditGuesser}
      show={ShowGuesser}
      create={MyCategoryCreate}
    />
  </Admin>
);
