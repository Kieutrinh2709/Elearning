import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import dayjs from "dayjs";
import { actCourseDetailGet, actRegisterCourse} from "../../redux/actions/CourseAction";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import { TYPE_USER, USER_LOGIN } from "../../util/setting";
import Header from "../../components/Header/Header";
import CourseList from "../../components/ListCourse/CourseList";
export default function CourseContent(props) {

  const {courseDetailData, setOpenModal } = props;


  const dispatch = useDispatch();

  // useEffect(() => {
  //   const { maKhoaHoc } = props.match.params;
  //   dispatch(actCourseDetailGet(maKhoaHoc));
  //   window.scroll(0, 0);
  // }, []);

  const handleRegisterCourse = () => {
    if (!localStorage.getItem("HV")) {
      Swal.fire({
        title: "Bạn chưa đăng nhập!!! ",
        icon: "warning",
        confirmButtonText: "Đóng",
        timer: 3000,
      });
      setTimeout(() => {
        return history.push("/login");
      }, 3000);
    }
    
    const courseInfo = {
      maKhoaHoc: courseDetailData && courseDetailData.maKhoaHoc,
      taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
    };
    dispatch(actRegisterCourse((courseInfo)));
    setOpenModal(true)
  };


  return (
    <div className="courseDetail">
      <Header/>
      <div className="container mt-5 lg:mt-40 overflow-hidden">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-2xl lg:text-5xl font-bold mt-5 lg:mt-6">
            Chi Tiết Khóa Học {courseDetailData?.tenKhoaHoc}
          </h1>
          <img src={courseDetailData?.hinhAnh} />
        </div>
        <div className=" mx-3 mt-8 lg:mt-24 grid lg:grid-flow-col lg:grid-cols-12 gap-4">
          <div className="img_collegeLevel_home col-span-12 lg:col-span-9">
            <h2 className="font-body text-2xl lg:text-5xl mb-3 lg:mb-10 font-bold leading-tight">
              Nội dung khóa học:
            </h2>
            <p className="text-md lg:text-xl lg:pr-12 text-justify">
              {courseDetailData?.moTa}
            </p>
            <p className="text-md lg:text-xl lg:pr-12 text-justify">
              Ngày tạo:{" "}
              {dayjs(courseDetailData?.ngayTao).format("DD-MM-YYYY ")}
            </p>           
            <p className="text-md lg:text-xl lg:pr-12 text-justify">     
              Tác giả: {courseDetailData?.nguoiTao?.hoTen}
            </p>
          </div>
          <button type="button" class="btn btn-danger" onClick={() => {handleRegisterCourse()}}>
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
    </div>
  )
}

