import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetailAction } from "../../redux/actions/CourseAction";
import CourseContent from "./CourseContent";
import CourseModal from "./CourseModal";
export default function CourseDetail(props) {

  const courseDetail= useSelector(
    (state) => state.CourseReducer.CourseDetail
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const { maKhoaHoc } = props.match.params;
    dispatch(getCourseDetailAction(maKhoaHoc));
    window.scroll(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    (
      <Fragment>
        <CourseContent
          courseDetail={courseDetail}
          setOpenModal={setOpenModal}
        />
        <CourseModal openModal={openModal} setOpenModal={setOpenModal} />
      </Fragment>
    )
  );
}
