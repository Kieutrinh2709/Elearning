import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GROUP_ID } from "../../../../util/setting";
import { actCourseAdd, actCourseCategoryGet, actCourseUpdate } from "../../../../redux/actions/CourseAction";
import { actGetAllUser } from "../../../../redux/actions/UserAction";
import { CLOSE_MODAL, OPEN_MODAL } from "../../../../redux/actions/type/UserType";

export default function EditCourse(props) {
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // let { action } = useParams();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actCourseCategoryGet());
  //   dispatch(actGetAllUser());
  // }, []);
  const open = useSelector((state) => state.UserReducer.open);
  const handleOpen = () => dispatch({ type: OPEN_MODAL });
  const handleClose = () => dispatch({ type: CLOSE_MODAL });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const courseCategory = useSelector(
    (state) => state.CourseReducer.dataCourseCategory
  );
  const listUser = useSelector((state) => state.UserReducer.listUser);

  const [state, setState] = React.useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    biDanh: "",
    moTa: "",
    luotXem: "",
    danhGia: "",
    hinhAnh: {},
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: "",
  });
  const course = useSelector((state) => state.CourseReducer.courseDetailData);
  React.useEffect(() => {
    if (course) {
      setState({
        maKhoaHoc: course.maKhoaHoc,
        tenKhoaHoc: course.tenKhoaHoc,
        biDanh: course.biDanh,
        moTa: course.moTa,
        luotXem: course.luotXem,
        danhGia: course.danhGia,
        hinhAnh: null,
        ngayTao: "",
        maDanhMucKhoaHoc: course.maDanhMucKhoaHoc,
        taiKhoanNguoiTao: course.taiKhoanNguoiTao,
      });
    } else {
      setState({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        biDanh: "",
        moTa: "",
        luotXem: "",
        danhGia: "",
        hinhAnh: {},
        ngayTao: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: "",
      });
    }
  }, [course]);


  const [imgSrc, setImgSrc] = useState(null);

  // let formData = new FormData();
  const [file, setFile] = useState(null);

  // const handleChangeInput = (e) => {
  //   const { value, name } = e.target;
  //   console.log(name, value);
  //   setCourseDetail({
  //     ...courseDetail,
  //     [name]: value,
  //   });
  // };

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    setFile(file);
    setState({ ...course, hinhAnh: file.name });
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      setImgSrc(e.target.result);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (course !== null) {
      return dispatch(actCourseUpdate(state)), handleClose();
    }
    return dispatch(actCourseAdd(state)), handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles}>
        <Box component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}>

          <h1>{course ? "Thêm Khóa Học" : "Chỉnh Sửa Khóa Học"}</h1>
          <div>
            {course ? (
              <TextField
                label="Mã Khóa Học"
                type="text"
                value={course?.maKhoaHoc}
                name="maKhoaHoc"
                onChange={handleChange}
              />
            ) : (
              <TextField
                label="Mã Khóa Học"
                type="text"
                value={course?.maKhoaHoc}
                name="maKhoaHoc"
                onChange={handleChange}
              />)}
            {course ? (

              <TextField
                label="Tên Khóa Học"
                type="text"
                value={course?.tenKhoaHoc}
                name="tenKhoaHoc"
                onChange={handleChange}
              />
            ) : (
              <TextField
                label="Tên Khóa Học"
                type="text"
                value={course?.tenKhoaHoc}
                name="tenKhoaHoc"
                onChange={handleChange}
              />)}
            {course ? (

              <TextField
                label="Bí danh"
                type="text"
                value={course?.biDanh}
                name="biDanh"
                onChange={handleChange}
              />
            ) : (
              <TextField
                label="Bí danh"
                type="text"
                value={course?.biDanh}
                name="biDanh"
                onChange={handleChange}
              />)}
            <TextField
              label="Ngày Tạo"
              type="text"
              value={course?.ngayTao}
              name="ngayTao"
              onChange={handleChange}
            />
            <FormControl>
              <InputLabel id="courseCategory">Danh mục khóa học</InputLabel>
              <Select
                labelId="courseCategory"
                label="Danh mục khóa học"
                value={course?.maDanhMucKhoaHoc}
                name="maDanhMucKhoaHoc"
                onChange={handleChange}
              >
                {courseCategory &&
                  courseCategory?.map((category) => (
                    <MenuItem
                      key={category.maDanhMuc}
                      value={category.maDanhMuc}
                    >
                      {category.tenDanhMuc}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            {/* <FormControl>
              <InputLabel id="courseCategory">Người Tạo</InputLabel>
              <Select
                labelId="courseCategory"
                label="Người Tạo"
                value={course?.taiKhoanNguoiTao}
                name="taiKhoanNguoiTao"
                onChange={handleChange}
              >
                {listUser &&
                  listUser
                    ?.filter((user) => user.maLoaiNguoiDung === "GV")
                    .map((user) => (
                      <MenuItem key={user.taiKhoan} value={user.taiKhoan}>
                        {user.hoTen}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl> */}
            <TextField
              label="Mô Tả"
              type="textarea"
              value={course?.moTa}
              name="moTa"
              onChange={handleChange}
              multiline
              minRows={4}
            />
            <FormControl sx={styles.inputFile}>
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
              />
              <Box sx={{ width: 50, height: 50 }}>
                {course?.hinhAnh && (
                  <img
                    src={imgSrc}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
            </FormControl>
          </div>
          <Button
            variant="contained"
            sx={styles.button}
          >
            {course ? "Thêm" : "Lưu"}
          </Button>
        </Box>
      </Box>
    </Modal >
  );
}
