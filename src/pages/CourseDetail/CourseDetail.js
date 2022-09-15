import { Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import dayjs from "dayjs";
import { getCourseDetailAction, registerCourseAction } from "../../redux/actions/CourseAction";
import CourseList from "../../components/ListCourse/CourseList";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import { TYPE_USER, USER_LOGIN } from "../../util/setting";
import Header from "../../components/Header/Header";
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
    if (!localStorage.getItem(USER_LOGIN) && localStorage.getItem(TYPE_USER) == "\"HV\"") {
      Swal.fire({
        title: "Bạn chưa đăng nhập!!! ",
        icon: "warning",
        confirmButtonText: "Đóng",
        timer: 3000,
      });
      setTimeout(() => {
        return history.push("/login");
      }, 3000);
    } else {
      Swal.fire({
        title: "Đăng ký khóa học thành công!!! ",
        icon: "warning",
        confirmButtonText: "Đóng",
        timer: 3000,
      });
      setTimeout(() => {
        return history.push("/user-profile/${taiKhoan}");
      }, 3000); 
    }
    
    const courseInfo = {
      maKhoaHoc: courseDetail && courseDetail.maKhoaHoc,
      taiKhoan: JSON.parse(localStorage.getItem(USER_LOGIN) && localStorage.getItem(TYPE_USER) == "\"HV\"").taiKhoan,
    };
    dispatch(registerCourseAction((courseInfo)));
  };


  return (
    <div className="courseDetail">
      <Header/>
      <div className="container mt-5 lg:mt-40 overflow-hidden">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-2xl lg:text-5xl font-bold mt-5 lg:mt-6">
            Chi Tiết Khóa Học {courseDetail.tenKhoaHoc}
          </h1>
          <img src={courseDetail.hinhAnh} />
        </div>
        <div className=" mx-3 mt-8 lg:mt-24 grid lg:grid-flow-col lg:grid-cols-12 gap-4">
          <div className="img_collegeLevel_home col-span-12 lg:col-span-9">
            <h2 className="font-body text-2xl lg:text-5xl mb-3 lg:mb-10 font-bold leading-tight">
              Nội dung khóa học:
            </h2>
            <p className="text-md lg:text-xl lg:pr-12 text-justify">
              {courseDetail.moTa}
            </p>
            <p className="text-md lg:text-xl lg:pr-12 text-justify">
              Ngày tạo:{" "}
              {dayjs(courseDetail.ngayTao).format("DD-MM-YYYY ")}
            </p>           
            <p className="text-md lg:text-xl lg:pr-12 text-justify">     
              Tác giả: {courseDetail.nguoiTao?.hoTen}
            </p>
          </div>
          <button className="btnRegister bg-danger" onClick={() => handleRegisterCourse()}>
            Đăng ký
          </button>
        </div>
        <div className="related-course mx-3 mt-5">
          <h2 className="text-2xl lg:text-5xl mt-14 mb-10 font-bold leading-tight">
            Các khoá học liên quan
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 -m-4"><CourseList /></div>
        </div>
       
      </div>
      <Footer/>
    </div>
  )
}

