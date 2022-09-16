import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { actCourseAllGet, actCourseByCategoryGet, actCourseCategoryGet } from "../../redux/actions/CourseAction";
import CourseCard from "./CourseCard";
import CourseCategory from "./CourseCategory";

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
    dispatch(actCourseCategoryGet());
  }, []);

  useEffect(() => {
    if (selectCategory !== "All") {
      dispatch(actCourseByCategoryGet(selectCategory));
    } else {
      dispatch(actCourseAllGet());
    }
  }, [selectCategory]);

  const dataCourseCategory = useSelector(
    (state) => state.CourseReducer.dataCourseCategory
  );
  const dataCourseList = useSelector(
    (state) => state.CourseReducer.dataCourseList
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
    if (!dataCourseList) {
      return;
    }
    const pages = Math.ceil(dataCourseList?.length / 6);
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
    courseList = dataCourseList?.slice(firstItem, lastItem);
    return courseList?.map((course) => (
      <Box sx={styles.courseItem} key={course.maKhoaHoc}>
        <CourseCard courseInfo={course} />
      </Box>
    ));
  };

  return (
    <Fragment>
      <h1 className="text-danger text-center mt-5">DANH SÁCH KHÓA HỌC</h1>
      <ThemeProvider theme={theme}>
        <Box sx={styles.container}>
          {dataCourseCategory && (
            <CourseCategory
              courseCategory={dataCourseCategory}
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
              setPage={setPage}
            />
          )}
          <Box sx={styles.containerFlex}>
            {dataCourseCategory && renderCourseList()}
          </Box>
          {renderPagination()}
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}
