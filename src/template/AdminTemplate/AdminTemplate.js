import React from "react";
import { Route, Redirect } from "react-router-dom";
import { theme } from "../../styles/styles";
import {ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import MyDrawer from "../../pages/Admin/Drawer/Drawer";



export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  if (localStorage.getItem("GV") ){
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MyDrawer />
          <Route exact={exact} path={path} component={component} />
        </ThemeProvider>
      </div>
    );
  }
  return <Redirect to="/" />;
}
