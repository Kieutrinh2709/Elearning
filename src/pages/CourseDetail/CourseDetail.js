import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { actCourseDetailGet } from "../../redux/actions/CourseAction";
import CourseContent from "./CourseContent";
import CourseModal from "./CourseModal";

export default function CourseDetail(props) {

  const courseDetailData = useSelector(
    (state) => state.CourseReducer.courseDetailData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const { maKhoaHoc } = props.match.params;
    dispatch(actCourseDetailGet(maKhoaHoc));
    window.scroll(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    (
      <Fragment>
        <Header/>
        <CourseContent
          courseDetailData={courseDetailData}
          setOpenModal={setOpenModal}
        />
        <CourseModal openModal={openModal} setOpenModal={setOpenModal} />
        <Footer/>
      </Fragment>
    )
  );
}
