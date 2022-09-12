import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetailAction } from "../../redux/actions/CourseAction";
import CourseContent from "./CourseContent";
import CourseModal from "./CourseModal";

export default function CourseDetail(props) {

  const courseDetailData = useSelector(
    (state) => state.CourseReducer.courseDetailData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const { maKhoaHoc } = props.match.params;
    dispatch(getCourseDetailAction(maKhoaHoc));
    window.scroll(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    console.log("detail component"),
    (
      <Fragment>
        <CourseContent
          courseDetailData={courseDetailData}
          setIsModalOpen={setIsModalOpen}
        />
        <CourseModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Fragment>
    )
  );
}
