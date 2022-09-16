import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { withRouter } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HomeIcon from "@mui/icons-material/Home";
import { history } from "../../../App";
import NavBarAdmin from "../../../components/Admin/AdminHeader";
import logo from "../../../asset/images/logo.png"
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "#000000",
  },
  icon: {
    padding: "1rem",
    color: "#fff",
  },
  drawer: {
    width: "200px",
  },
});

function MyDrawer(props) {
  const itemList = [
    {
      text: "Trang chủ",
      icon: <HomeIcon color="primary" />,
      onClick: () => history.push("/"),
    },
    {
      text: "Dashboard",
      icon: <DashboardIcon color="primary" />,
      onClick: () => history.push("/dashboard"),
    },
    {
      text: "Quản lý người dùng",
      icon: <AccountCircleIcon color="primary" />,
      onClick: () => history.push("/list-users"),
    },
    {
      text: "Quản lý khoá học",
      icon: <LibraryBooksIcon color="primary" />,
      onClick: () => history.push("/list-courses"),
    },
  ];


  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBarAdmin/>
      <Drawer variant="permanent" className={classes.drawer}>
        <Toolbar>
          <h1 className="text-white mt-2">COURSERA</h1>
        </Toolbar>
        <Divider />
        <List>
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
export default withRouter(MyDrawer);
