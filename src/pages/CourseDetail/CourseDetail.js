import { Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import dayjs from "dayjs";
import { getCourseDetailAction, registerCourseAction } from "../../redux/actions/CourseAction";
export default function CourseDetail(props) {

  const courseDetail = useSelector(
    (state) => state.CourseReducer.courseDetail
  );
  // console.log(courseDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    const { maKhoaHoc } = props.match.params;
    dispatch(getCourseDetailAction(maKhoaHoc));
    window.scroll(0, 0);
  }, []);

  const handleRegisterCourse = () => {
    if (!localStorage.getItem("HV")) {
      history.push("/login");
    }
    const courseInfo = {
      maKhoaHoc: courseDetail && courseDetail.maKhoaHoc,
      taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
    };
    dispatch(registerCourseAction((courseInfo)));
  };


  return (
      <div className="courseDetail">
        <div className="container course-container">
          <div className="row">
            <div className="col-1 course-image">
              <img src={courseDetail.hinhAnh} alt="" />
              
              {/* <CourseModal openModal={openModal} setOpenModal={setOpenModal} /> */}
            </div>
            <div className="col-2">
              <div className="text-info-course">
                <h2 className="">{courseDetail.tenKhoaHoc}
                </h2>
                <p>
                  Ngày tạo:{" "}
                  {dayjs(courseDetail.ngayTao).format("DD-MM-YYYY ")}
                </p>
                <p>NỘI DUNG KHÓA HỌC :</p>
                <p className="courseDescription">{courseDetail.moTa}</p>
              </div>
            </div>
            <Button
                  variant="contained"
                  onClick={() => {
                    handleRegisterCourse();
                  }}
                >
                  ĐĂNG KÝ
            </Button>
          </div>
        </div>
        </div>
  )
}

