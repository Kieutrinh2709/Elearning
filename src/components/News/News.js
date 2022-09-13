import React from 'react'

export default function News() {
    return (
        <div className="news" id="news" >
            <nav className=" mb-4 news__tab">
                <div className="nav nav-tabs news__tab__item" id="nav-tab" role="tablist" >
                    <a className="nav-item course-tab nav-link active mr-2" id="nav-home-tab" data-toggle="tab" href="#nav-course" role="tab" aria-controls="nav-movie-tab" aria-selected="true">Các khóa học</a>
                    <a className="nav-item course-tab nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-gift" role="tab" aria-controls="nav-gift-tab" aria-selected="false">Khuyến mãi</a>
                </div>
            </nav>
            <div className="tab-content container news__content" id="nav-tabContent">
                <div className="tab-pane fade show active list__course" id="nav-course" role="tabpanel" aria-labelledby="nav-movie-tab">
                    <div className="row newsCourse">
                        <div className="col-12 col-sm-6 pb-2 newsCourse__item">
                            <a href="#"><img className="w-100 b-block" src="./images/icons/news/1.png" /></a>
                            <a href="#" className="newsTitle">Cải thiện tốc độ xử lý công việc với Excel</a>
                            <p className="newsContent">Dân văn phòng nếu sử dụng thành thạo các hàm thống kê, tìm kiếm, trích lọc… sẽ nhập, tính toán, phân tích dữ liệu nhanh hơn. </p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 newsCourse__item">
                            <a href="#"><img className="w-100 d-block" src="./images/icons/news/2.jpg" /></a>
                            <a href="#" className="newsTitle">Cách sử dụng SCSS ,Phần mềm bên dịch SCSS Prepros </a>
                            <p className="newsContent">Xây dựng 1 bộ SCSS có thể tái sử dụng ở mọi dự án.</p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2 newsCourseS">
                        <div className="col-12 col-sm-8  newsCourseS__left">
                            <div className="col-12 col-sm-6  pb-2 newsCourseS_left__item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/news/3.jpg" /></a>
                                <a href="#" className="newsTitle">Higher Order Component pattern có bị thay thế? React</a>
                                <p className="newsContent">Higher order components (HOC) là gì? Sử dụng như thế nào? Một số lưu ý khi sử dụng là gì?. </p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6  newsCourseS_left__item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/news/4.jpg" /></a>
                                <a href="#" className="newsTitle">Cách áp dụng Layout cho các pages khác nhau bằng cách sử dụng Route trong ReactJS</a>
                                <p className="newsContent">Hướng dẫn cơ bản về Route trong ReactJS.</p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 listNews">
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/5.png" /></a>
                                <a href="#"><p>Tìm hiểu lệnh ping, traceroute trong network</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/6.jpg" /></a>
                                <a href="#"><p>Nâng cấp từ Dev Frontend Web2 sang Web3</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/7.webp" /></a>
                                <a href="#"><p>Hoisting trong JavaScript </p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/8.jpg" /></a>
                                <a href="#"><p>Phân biệt var và let trong JavaScript</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="tab-pane fade list__course" id="nav-gift" role="tabpanel" aria-labelledby="nav-gift-tab">
                    <div className="row newsCourse">
                        <div className="col-12 col-sm-6 pb-2 newsCourse__item">
                            <a href="#"><img className="w-100 b-block" src="./images/icons/news/9.png" /></a>
                            <a href="#" className="newsTitle">Học nhóm  </a>
                            <p className="newsContent">Tận hưởng uu đãi học phí từ 10% đến 20% nếu các bạn đăng ký theo nhóm </p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 newsCourse__item">
                            <a href="#"><img className="w-100 d-block" src="./images/icons/news/10.jpg" /></a>
                            <a href="#" className="newsTitle">Giới thiệu bạn học </a>
                            <p className="newsContent">Khi học viên giới thiệu bạn học sẽ nhận ưu đãi được tặng 150.000 đến 300.000</p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row py-2 newsCourseS">
                        <div className="col-12 col-sm-8  newsCourseS__left">
                            <div className="col-12 col-sm-6  pb-2 newsCourseS_left__item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/news/11.png" /></a>
                                <a href="#" className="newsTitle">Uư đãi khóa học tiếp theo</a>
                                <p className="newsContent">Giảm 300.000 tới 800.000 đồng khi học viên đăng ký tham gia các khóa tiếp theo. </p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6  newsCourseS_left__item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/news/12.png" /></a>
                                <a href="#" className="newsTitle">Học bổng</a>
                                <p className="newsContent">Tặng học bổng 15 - 100% học phí khóa học dựa vào kết quả kiểm tra kiến thức đầu vào (áp dụng với sinh viên và người chưa có kinh nghiệm làm việc).</p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 listNews">
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/13.png" /></a>
                                <a href="#"><p>Chương Trình Ưu Đãi Tháng 9 - Back to school, ai cũng có quà!</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/14.png" /></a>
                                <a href="#"><p>ƯU ĐÃI CHẤT - NHẤT SINH VIÊN, GIẢM TỚI 5.000.000Đ HỌC PHÍ CÁC KHÓA HỌC TIẾNG ANH TRONG THÁNG 8</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/15.png" /></a>
                                <a href="#"><p>CHÀO TÂN SINH VIÊN 2022: ƯU ĐÃI LÊN ĐẾN 6.000.000Đ VỚI CÁC KHÓA HỌC TIẾNG ANH GIAO TIẾP VÀ IELTS</p></a>
                            </div>
                            <div className="col-12 listNewsItem">
                                <a href="#"><img src="./images/icons/news/16.png" /></a>
                                <a href="#"><p>Tiếng Anh cho người đi làm: Thành thạo giao tiếp chỉ sau 3 - 6 tháng tại Pasal - Học thử ngay</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="viewMoreButton">
                    <button id="btnNews">XEM THÊM</button>
                </div>

            </div>

        </div>
    )
}