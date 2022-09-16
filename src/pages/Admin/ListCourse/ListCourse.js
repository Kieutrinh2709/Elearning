import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actCourseAllGet, actCourseDetailGet } from "../../../redux/actions/CourseAction";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CoursesTable from "./EditCourse/CourseTable";
import { actGetKeyword } from "../../../redux/actions/UserAction";
import { OPEN_MODAL } from "../../../redux/actions/type/UserType";
import EditCourse from "./EditCourse/EditCourse";
import { useStyles } from "../../../styles/styles";

export default function ListCourses() {
  const styles = {
    root: {
      padding: "20px",
      margin: "0 auto",
    },
  };

  const dispatch = useDispatch();
  const handleOpen = () => dispatch({ type: OPEN_MODAL });
  const resetCourseEdit = () => dispatch(actCourseDetailGet(null));
  const classes = useStyles();

  useEffect(() => {
    dispatch(actCourseAllGet());
  }, []);

  const dataCourseList = useSelector(
    (state) => state.CourseReducer.dataCourseList
  );


  const handleOnChange = (event) => {
    const { value } = event.target;
    dispatch(actGetKeyword(value));
  };

  const CoursesTableComp = useMemo(
    () => <CoursesTable dataCourseList={dataCourseList} />,
    [dataCourseList]
  );

  return (
    <div className={classes.adminContent}>
      <Button
        
        variant="outlined"
        className="btn btn-add mt-5"
        onClick={() => {
          resetCourseEdit();
          handleOpen();

        }}
      >
        <AddBoxIcon fontSize="large" />
        Thêm Khóa Học
      </Button>
      <EditCourse />
      <div className="search-box mt-4">
        <SearchIcon sx={{ marginLeft: "20px" }} />
        <input
          className="admin-search"
          type="text"
          placeholder="Tìm khóa học.."
          onChange={handleOnChange}
        />
      </div>
      <Box sx={styles.root}>
        {dataCourseList && CoursesTableComp}
      </Box>
    </div>
  );
}
