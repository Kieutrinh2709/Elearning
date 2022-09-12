import { Avatar, Button, List, Skeleton } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelCourseAction } from "../../redux/actions/CourseAction";


export default function UserCourses(props) {
  const { user } = props;

  const dispatch = useDispatch();
  let keyword = useSelector((state) => state.UserReducer.keyword);
  const courseList = user?.chiTietKhoaHocGhiDanh.filter(
    (course) =>
      course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );
  
  // render couser list
  const renderCourses = () => {
    return courseList?.map((course, index) => {
      const courseInfo = {
        maKhoaHoc: course.maKhoaHoc,
        taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
      };
      return (
        <div key={index}>
          <List.Item>
          <Skeleton avatar title={false} active>
            <List.Item.Meta
              avatar={<Avatar src={course.hinhAnh} />}
              title={<a href="https://ant.design">{course.tenKhoaHoc}</a>}
              description= {course.moTa}
            />
            <Button type ="danger"
                onClick={() => {
                  dispatch(cancelCourseAction(courseInfo));
                }}
              >
                Hủy
              </Button>
          </Skeleton>
        </List.Item>
        </div>
      );
    });
  };

  return (
    <List
      sx={{
        width: "80%",
        maxWidth: "90%",
        bgcolor: "background.paper",
        marginTop: 1,
      }}
    >
      {renderCourses()}
    </List>
  );
}
