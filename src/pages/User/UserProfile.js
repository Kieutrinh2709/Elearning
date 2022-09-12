import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { getDetailUserAction } from "../../redux/actions/UserAction";
import { Grid, Table, Tabs } from "antd";
import UserInfo from "./UserInfor";
import UserCourses from "./UserCourse";


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
                <Grid sx={{ mt: 3, display: "block", margin: "auto" }}>{children}</Grid>
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
    // dispatch account user
    const dispatch = useDispatch();
    useEffect(() => {
        const accountUser = {
            taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
        }
        dispatch(getDetailUserAction((accountUser)));
    }, []);
    const user = useSelector(state => state.UserReducer.userDetail);

    return !localStorage.getItem("HV") ? (
        <Redirect to="/" />
    ) : (
        <>
            <div className="content">
                <div className="title">
                    <h2>{user && user.hoTen}</h2>
                </div>
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
                            <Table
                                sx={{ margin: "auto" }}
                                label="Thông tin cá nhân"
                                {...a11yProps(0)}
                            />
                            <Table
                                sx={{ margin: "auto" }}
                                label="Khóa học của tôi"
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TabPanel value={value} index={0}>
                            <UserInfo user={user} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <UserCourses user={user} />
                        </TabPanel>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default UserProfile;
