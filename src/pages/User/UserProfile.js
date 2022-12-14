import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import UserInfor from "./UserInfor";
import UserCourse from "./UserCourse";

import { actUserProfile } from "../../redux/actions/UserAction";
import { makeStyles } from "@mui/styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 3, display: "block", margin: "auto" }}>{children}</Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}


function UserProfile(props) {
  const { id } = props.match.params;
  const [value, setValue] = React.useState(Number(id));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const userProfileStyle = makeStyles(() => ({
    content: {
      marginBottom: 100,
    },
    title: {
      textAlign: 'center',
      "& h2": {
        fontSize: 35,
        marginBottom: 5,
      },
      '& p': {
        fontSize: 22,
      }
    },
    button: {
      fontSize: 1,
      padding: 10,
    }
  }))

  const classes = userProfileStyle();




  const dispatch = useDispatch();
  useEffect(() => {
    const accountUser = {
      taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
    }
    dispatch(actUserProfile((accountUser)));
  }, []);
  const user = useSelector(state => state.UserReducer.userDetail);

  return !localStorage.getItem("HV") ? (
    <Redirect to="/" />
  ) : (
    <>
    <Header/>
      <div className={classes.content}>
        <div className={classes.title}>
          <h2>{user && user.hoTen}</h2>
        </div>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "center",
            height: '100%',
            mt: 3,
          }}
        >
          <Grid container direction="row" justifyContent="space-around">
            <Grid item xs={12} md={3}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab
                  sx={{ margin: "auto" }}
                  label="Th??ng tin c?? nh??n"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ margin: "auto" }}
                  label="Kh??a h???c c???a t??i"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Grid>
            <Grid item xs={12} md={8}>
              <TabPanel value={value} index={0}>
                <UserInfor user={user} />
              </TabPanel>
              <TabPanel value={value} index={1}>

                <UserCourse user={user} />
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer/>
    </>
  );
}

export default UserProfile;
