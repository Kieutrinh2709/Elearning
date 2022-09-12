import { Button, Descriptions, Radio } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { registerAction } from '../../redux/actions/UserAction';

const CourseContent = (props) => {
    const [size, setSize] = useState('default');
    const { courseDetailData, setIsModalOpen  } = props;

    const dispatch = useDispatch();

    const history = useHistory();

    const handleRegisterCourse = () => {
        if (!localStorage.getItem("HV")) {
            history.push("/signin");
        }
        const courseInfo = {
            maKhoaHoc: courseDetailData && courseDetailData.maKhoaHoc,
            taiKhoan: JSON.parse(localStorage.getItem("HV")).taiKhoan,
        };
        dispatch(registerAction((courseInfo)));
        setIsModalOpen(true)
    };

    return (
        <div>
            <Descriptions title="Thông tin khóa học" extra={<Button type="danger" onClick={() => {
                handleRegisterCourse();
            }}>Đăng ký khóa học</Button>}>
                <Descriptions.Item label="Tên khóa học">{courseDetailData.tenKhoaHoc}</Descriptions.Item>
                <Descriptions.Item label="Mô tả">{courseDetailData.moTa}</Descriptions.Item>
                <Descriptions.Item label="Giảng viên">{courseDetailData.nguoiTao?.hoTen}</Descriptions.Item>
                <Descriptions.Item label="Học viên">{courseDetailData.soLuongHocVien}</Descriptions.Item>
                <Descriptions.Item label="Ngày cập nhật">{courseDetailData.ngayTao}</Descriptions.Item>
                <Descriptions.Item label="Lượt xem">{courseDetailData.luotXem}</Descriptions.Item>
            </Descriptions>

        </div>
    );
};

export default CourseContent;