import { Box, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerCourseAction } from "../../redux/actions/CourseAction";

const theme = createTheme({
  breakpoints: {
    values: {
      md: 992,
      sm: 768,
      xm: 576,
    },
  },
});

export default function CourseContent(props) {
  const {courseDetailData, setOpenModal } = props;

  const style = {
    containerFluid: {
      width: "100%",
      px: "15px",
      mx: "auto",
      mb: "50px",
    },
    containerLeft: {
      paddingRight: "1.5rem",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        flex: "0 0 60%",
        maxWidth: "60%",
      },
    },
    containerRight: {
      [theme.breakpoints.up("sm")]: {
        flex: "0 0 40%",
        maxWidth: "40%",
      },
      "& img": {
        display: "none",
        [theme.breakpoints.up("sm")]: { display: "block" },
        maxWidth: "100%",
        maxHeight: "250px",
        ml: "auto",
      },
    },
    courseTitle: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: "2.75rem",
      mb: "1rem",
    },
    courseDescription: {
      fontSize: "1.125rem",
      mb: "1rem",
    },
    courseInformation: {
      mr: "70px",
      mb: "1rem",
      [theme.breakpoints.down("md")]: { mr: "30px" },
      "& img": {
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        mr: "15px",
      },
      "& h5": {
        fontSize: "14px",
        color: "#53545b",
        fontWeight: 600,
      },
      "& p": {
        color: "#0e1133",
        fontWeight: 600,
      },
    },
  };

  const dispatch = useDispatch();

  const history = useHistory();

  const handleRegisterCourse = () => {
    if (!localStorage.getItem("HV")) {
      history.push("/login");
    }
    const courseInfo = {
      maKhoaHoc: courseDetailData && courseDetailData.maKhoaHoc,
      taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
    };
    dispatch(registerCourseAction((courseInfo)));
    setOpenModal(true)
  };
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {courseDetailData && (
          <Box sx={{ ...style.containerFluid, maxWidth: "1228px" }}>
            <Box display="flex">
              <Box sx={style.containerLeft}>
                <Typography variant="h1" sx={style.courseTitle}>
                  {courseDetailData.tenKhoaHoc}
                </Typography>
                <Typography variant="body1" sx={style.courseDescription}>
                  {courseDetailData.moTa}
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  <Box display="flex" sx={style.courseInformation}>
                    <img src="/img/teacher1.jpg" alt="" />
                    <Box>
                      <Typography variant="h5">Giảng viên</Typography>
                      <Typography variant="body1">
                        {courseDetailData.nguoiTao?.hoTen}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={style.courseInformation}>
                    <Typography variant="h5">Học viên</Typography>
                    <Typography variant="body1">
                      {courseDetailData.soLuongHocVien} học viên
                    </Typography>
                  </Box>
                  <Box sx={style.courseInformation}>
                    <Typography variant="h5">Ngày cập nhật</Typography>
                    <Typography variant="body1">
                      {courseDetailData.ngayTao}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleRegisterCourse();
                  }}
                >
                  ĐĂNG KÝ
                </Button>
              </Box>
              <Box sx={style.containerRight}>
                <img src="/img/course1.jpg" alt="" />
              </Box>
            </Box>
          </Box>
        )}
      </ThemeProvider>
    </Fragment>
  );
}
