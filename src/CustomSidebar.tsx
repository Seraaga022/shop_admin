import React from "react";
import { MenuItemLink, Sidebar } from "react-admin";
// import BookIcon from "@material-ui/icons/Book";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ForumIcon from "@mui/icons-material/Forum";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GradingIcon from "@mui/icons-material/Grading";

const resources = [
  { name: "customer", icon: <AccountCircleIcon />, label: "Customers" },
  { name: "category", icon: <AutoAwesomeMosaicIcon />, label: "Categories" },
  { name: "product", icon: <InventoryIcon />, label: "Products" },
  { name: "payment", icon: <PointOfSaleIcon />, label: "Payments" },
  { name: "address", icon: <DirectionsBoatIcon />, label: "Addresses" },
  { name: "adminLog", icon: <PsychologyIcon />, label: "Admin Logs" },
  { name: "order", icon: <AssignmentIcon />, label: "Orders" },
  { name: "feedback", icon: <ForumIcon />, label: "Feedbacks" },
  { name: "user", icon: <ManageAccountsIcon />, label: "Users" },
  { name: "orderDetail", icon: <GradingIcon />, label: "Order Items" },
];

const CustomSidebar = (props) => {
  return (
    <Sidebar {...props} className='mt-3'>
      <MenuItemLink to="/" primaryText="Dashboard" leftIcon={<HomeIcon />} />
      {resources.map((resource) => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={resource.label}
          leftIcon={resource.icon}
        />
      ))}
    </Sidebar>
  );
};

export default CustomSidebar;
