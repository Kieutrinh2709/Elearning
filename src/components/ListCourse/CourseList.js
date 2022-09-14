import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getCourseByCategoryAction, getListCategoryAction, getListCourseAction } from "../../redux/actions/CourseAction";
import CourseCategory from "./CourseCategory";
import CourseCard from "./CourseCard";

const theme = createTheme({
  breakpoints: {
    values: {
      xl: 1280,
      lg: 1200,
      md: 992,
      sm: 768,
      xm: 576,
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center",
        },
      },
    },
  },
});

export default function CourseList() {
  const dispatch = useDispatch();

  const [selectCategory, setSelectCategory] = useState("All");

  useEffect(() => {
    dispatch(getListCategoryAction());
  }, []);

  // Lấy danh sách tất cả khóa học và khóa học theo danh mục
  useEffect(() => {
    if (selectCategory !== "All") {
      dispatch(getCourseByCategoryAction(selectCategory));
    } else {
      dispatch(getListCourseAction());
    }
  }, [selectCategory]);

  const listCategoryShowing = useSelector(
    (state) => state.CourseReducer.listCategoryShowing
  );
  const listCourseShowing = useSelector(
    (state) => state.CourseReducer.listCourseShowing
  );

  const styles = {
    container: {
      width: "100%",
      mx: "auto",
      pb: ".5rem",
      [theme.breakpoints.up("xl")]: { maxWidth: 1200 },
      [theme.breakpoints.up("lg")]: { maxWidth: 1140 },
      [theme.breakpoints.up("md")]: {
        maxWidth: 960,
        pb: "3rem",
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 720,
        pb: "1.5rem",
      },
      [theme.breakpoints.up("xm")]: { maxWidth: 540 },
    },
    containerFlex: {
      display: "flex",
      flexWrap: "wrap",
    },
    courseItem: {
      width: "100%",
      padding: "15px",
      [theme.breakpoints.up("md")]: {
        maxWidth: "33.33%",
        flex: "0 0 33.33%",
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: "50%",
        flex: "0 0 50%",
      },
    },
  };

  // hàm render pagination sau khi lấy được danh sách khóa học
  const renderPagination = () => {
    if (!listCourseShowing) {
      return;
    }
    const pages = Math.ceil(listCourseShowing?.length / 6);
    return (
      <Pagination
        count={pages}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePage}
      />
    );
  };

  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    // bắt buộc phải có event?
    setPage(value);
    window.scroll(0, 0);
  };

  // hàm thay đổi danh sách render theo trang
  let courseList = null;
  const renderCourseList = () => {
    window.scroll(0, 0);
    const firstItem = (page - 1) * 6;
    const lastItem = firstItem + 6;
    courseList = listCourseShowing?.slice(firstItem, lastItem);
    return courseList?.map((course) => (
      <Box sx={styles.courseItem} key={course.maKhoaHoc}>
        <CourseCard courseInfo={course} />
      </Box>
    ));
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={styles.container}>
          {listCategoryShowing && (
            <CourseCategory
              courseCategory={listCategoryShowing}
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
              setPage={setPage}
            />
          )}
          <Box sx={styles.containerFlex}>
            {listCategoryShowing && renderCourseList()}
          </Box>
          {renderPagination()}
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}
