import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { actCancelCourse } from "../../redux/actions/UserAction";

export default function UserCourse(props) {
  const { user } = props;
  const dispatch = useDispatch();

  let keyword = useSelector((state) => state.UserReducer.keyword);
  const courseList = user?.chiTietKhoaHocGhiDanh.filter(
    (course) =>
      course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );

  const renderCourses = () => {
    return courseList?.map((course, index) => {
      const courseInfo = {
        maKhoaHoc: course.maKhoaHoc,
        taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
      };
      return (
        <div key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="wordpress" src={course.hinhAnh} />
            </ListItemAvatar>
            <ListItemText
              primary={course.tenKhoaHoc}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    // color="text.primary"
                  >
                    {course.moTa}
                  </Typography>

                  {" — Master with this Complete Course…"}
                </React.Fragment>
              }
            />
            <Box sx={{ "& button": { m: 1 } }}>
              <Button
                // className="classes.button"
                variant="contained"
                size="small"
                onClick={() => {
                  dispatch(actCancelCourse(courseInfo));
                }}
              >
                Hủy ghi danh
              </Button>
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      );
    });
  };

  return (
    <List
      sx={{
        width: "80%",
        maxWidth: "90%",
        bgcolor: "background.paper",
        marginTop: 1,
      }}
    >
      {renderCourses()}
    </List>
  );
}
