// import React from 'react'
import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import {
  useTheme,
  useSidebarState,
} from "react-admin";
import { AuthContext, AuthContextType } from "./AuthContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginInlineEnd: "2px",
    borderRadius: "50%",
  },
}));

const CustomAppBar = (props) => {
  const { Admin, setIsAuthenticated } = useContext(
    AuthContext
  ) as AuthContextType;
  const classes = useStyles();
  const [theme, setTheme] = useTheme();
  const [sidebarOpen, setSidebarOpen] = useSidebarState();
  const currentTheme = localStorage.getItem("RaStore.theme");

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("RaStore.theme", newTheme);
  };

  return (
    <AppBar
      {...props}
      style={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
        background: "#157ad0",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}></Typography>
        <Button
          onClick={() => {
            setIsAuthenticated(false);
          }}
          style={{ background: "red", color: "white" }}
        >
          LogOut
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {currentTheme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {Admin.avatar && (
          <img src={Admin.avatar} alt="Avatar" className={classes.avatar} />
        )}
        {Admin.name}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
