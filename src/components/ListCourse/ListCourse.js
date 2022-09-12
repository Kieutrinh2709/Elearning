import { render } from '@testing-library/react';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import Slider from "react-slick";
import 'reactjs-popup/dist/index.css';
// import { AppContext } from '../../context/AppProvider';
import { getCourseDetailAction, getListCourseAction } from '../../redux/actions/CourseAction';

export default function ListCourses() {
    const { listCourseShowing } = useContext();
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListCourseAction());
    }, []);
    const settings = {
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    rows: 2,
                    slidesToShow: 1,
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    rows: 1
                }
            }
        ]

    };
    const renderCourseShowing = () => {
        return listCourseShowing.map((f, index) => {
            if (index < 22) {
                return <div key={index} className="course__showing  mt-4 mb-2" onClick={() => {
                    // setIsModalVisible(true);
                }}>
                    <div className="course__img">
                        <img src={f.hinhAnh} className="w-100 d-blo ck" />
                        <div className="course__hover"></div>
                    </div>
                    <div className="courseInfoDetail" onClick={() => { setIsOpen(true) }}>
                        <div className="course__info d-flex">
                            <span className="nameCourse" >
                                {f.tenKhoaHoc}
                            </span>
                        </div>
                        <div className="infoCourse mb-2">
                            <span>Được tạo bởi</span>
                            <span> {f.nguoiTao.hoTen}</span>
                        </div>
                        <div className="infoCourse mb-2">
                            <span> {f.soLuongHocVien}</span>
                            <span>Học viên</span>
                        </div>
                        <div className="rateCourse">
                            <div className="point">
                                {f.luotXem}
                            </div>
                        </div>
                    </div>
                    <NavLink onClick={() => {
                        dispatch(getCourseDetailAction())
                    }} to={`/course/${f.maKhoaHoc}`}><button className="btnDetailCourse">CHI TIẾT </button></NavLink>
                </div>
            }
        })
    }
    return (
        <div className="course__tab" id="tab">
            <nav className="course__tab__title mb-4">
                <div className="nav nav-tabs tab__tittle__item" id="nav-tab" role="tablist" >
                    <a className="nav-item course-tab nav-link active mr-3" id="nav-home-tab" data-toggle="tab" href="#nav-showing" role="tab" aria-controls="nav-showing" aria-selected="true">Khóa Học</a>
                    <a className="nav-item course-tab nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-news" role="tab" aria-controls="nav-news" aria-selected="false">Tin Tức</a>
                </div>
            </nav>
            <div className="tab-content container course__tab__item" id="nav-tabContent">
                <div className="tab-pane fade show active list__course" id="nav-showing" role="tabpanel" aria-labelledby="nav-showing-tab">
                    <Slider id="showCourse" {...settings}>
                        {renderCourseShowing()}
                    </Slider>
                </div>
                <div className="tab-pane fade show active list__news" id="nav-news" role="tabpanel" aria-labelledby="nav-news-tab">
                    <div className="row newsCourse">
                        <div className="col-12 col-sm-6 pb-2 newsCourse__item">
                            <a href="#"><img className="w-100 b-block" src="./images/icons/article/latmat.png" /></a>
                            <a href="#" className="articleTitle">Cải thiện tốc độ xử lý công việc với Excel</a>
                            <p className="articleContent">Dân văn phòng nếu sử dụng thành thạo các hàm thống kê, tìm kiếm, trích lọc… sẽ nhập, tính toán, phân tích dữ liệu nhanh hơn. </p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 newsCourse__item">
                            <a href="#"><img className="w-100 d-block" src="./images/icons/article/ali.png" /></a>
                            <a href="#" className="articleTitle">Cách sử dụng SCSS ,Phần mềm bên dịch SCSS Prepros </a>
                            <p className="articleContent">Xây dựng 1 bộ SCSS có thể tái sử dụng ở mọi dự án.</p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2 newsCourseS">
                        <div className="col-12 col-sm-8  newsCourseS__left">
                            <div className="col-12 col-sm-6  pb-2 newsCourseS_left__item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/article/1.png" /></a>
                                <a href="#" className="articleTitle">Higher Order Component pattern có bị thay thế? React</a>
                                <p className="articleContent">Higher order components (HOC) là gì? Sử dụng như thế nào? Một số lưu ý khi sử dụng là gì?. </p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6  newsCourseS_left__item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/article/2.png" /></a>
                                <a href="#" className="articleTitle">Cách áp dụng Layout cho các pages khác nhau bằng cách sử dụng Route trong ReactJS</a>
                                <p className="articleContent">Hướng dẫn cơ bản về Route trong ReactJS.</p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 listNews">
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/article/3.jpg" /></a>
                                <a href="#"><p>Tìm hiểu lệnh ping, traceroute trong network</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/article/4.png" /></a>
                                <a href="#"><p>Nâng cấp từ Dev Frontend Web2 sang Web3</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/article/5.png" /></a>
                                <a href="#"><p>Hoisting trong JavaScript</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/article/6.jpg" /></a>
                                <a href="#"><p>Phân biệt var và let trong JavaScript</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container back__news" style={{ backgroundImage: "url('./images/icons/back-news.png')" }}></div>
        </div>
    )
}
