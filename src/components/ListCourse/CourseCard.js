import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Rating,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React, { Fragment } from "react";

export default function CourseCard(props) {
  const { courseInfo } = props;

  const styles = {
    root: {
      position: "realative",
      display: "flex",
      flexDirection: "column",
      wordWrap: "break-word",
      borderRadius: ".5rem",
      background: "none",
      boxShadow: "0 25px 98px 0 rgba(0,0,0,.04)",
    },
    cardImage: {
      display: "block",
      width: "100%",
      flexShrink: 0,
    },
    cardTitle: {
      textDecoration: "none",
      mt: "15px",
      display: "block",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
      color: "#3f3a64",
      cursor: "pointer",
      "&:hover": {
        color: "#1545CB",
      },
    },
    cardNormalTextColor: {
      opacity: ".6",
      color: "#666",
    },
    cardFooter: {
      backgroundColor: "#fff",
      padding: ".75rem 1.25rem",
      borderTop: "1px solid rgba(0, 0, 0, .125)",
      borderRadius: "0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)",
    },
    courseAuthorText: {
      fontSize: "14px",
      fontWeight: 600,
      display: "inline-block",
      ml: "8px",
    },
    courseAuthorLink: {
      display: "inline-block",
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontSize: "17px",
      fontWeight: 600,
      lineHeight: "28px",
      color: "#3f3a64",
      textDecoration: "none",
      ml: "8px",
      cursor: "pointer",
      "&:hover": {
        color: "#1545CB",
      },
    },
  };

  return (
    <Fragment>
      <Card sx={styles.root}>
        <CardMedia
          component="img"
          alt=""
          sx={styles.cardImage}
          src={courseInfo.hinhAnh}/>
        
        <CardContent sx={{ padding: "30px" }}>
         
          <Link
            component={RouterLink}
            to={`/course/${courseInfo.maKhoaHoc}`}
            sx={styles.cardTitle}
          >
            {courseInfo.tenKhoaHoc}
          </Link>
        </CardContent>
        <CardActions sx={styles.cardFooter}>
          <Typography
            component="span"
            sx={{
              ...styles.courseAuthorText,
              ...styles.cardNormalTextColor,
            }}
          >
            tác giả: 
          </Typography>
          <Link sx={{ ...styles.courseAuthorLink, maxWidth: "80px" }}>
            {courseInfo.nguoiTao.hoTen}
          </Link>
          <Typography
            component="span"
            sx={{
              ...styles.courseAuthorText,
              ...styles.cardNormalTextColor,
            }}
          >
            trong
          </Typography>
          <Link sx={styles.courseAuthorLink}>
            {courseInfo.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </Link>
        </CardActions>
      </Card>
    </Fragment>
  );
}