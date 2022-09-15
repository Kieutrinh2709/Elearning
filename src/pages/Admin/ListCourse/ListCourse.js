import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
    EditOutlined,
    DeleteOutlined,
    HighlightOutlined

} from '@ant-design/icons';
import { Box, Button, Table } from '@mui/material';
import { deleteCourseAction, getListCourseAction } from '../../../redux/actions/CourseAction';
import { Input } from 'antd';
import { getListUserJoinedAction, getListUserSelectorAction, getListUserWaitingAction } from '../../../redux/actions/UserAction';
import { useEffect } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { history } from '../../../App';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
const { Search } = Input;

export default function ListCourse(props) {
    const dispatch = useDispatch();
    const [showRegisterModal, setShowRegisterModal] = React.useState(false);
    const handleShowRegisterModal = () => setShowRegisterModal(true);
    const handleCloseRegisterModal = () => setShowRegisterModal(false);

    const getCourseKey = (courseKey) => {
        const key = {
            maKhoaHoc: courseKey,
        };
        handleShowRegisterModal();
        dispatch(getListUserSelectorAction(key));
        dispatch(getListUserWaitingAction(key));
        dispatch(getListUserJoinedAction(key));
        dispatch(getCourseKey(courseKey))
    };
    const { listCourseShowing } = useSelector((state) => state.CourseReducer);
    useEffect(() => {
        dispatch(getListCourseAction());

    }, [])
    const columns = [
        {
            title: 'MÃ KHÓA HỌC',
            width: '10%',
            dataIndex: 'maKhoaHoc',
            key: 'maKhoaHoc',
        },
        {
            title: "Tên khoá học",
            dataIndex: "tenKhoaHoc",
            sorter: (a, b) => {
                let courseA = a.tenKhoaHoc.toLowerCase().trim();
                let courseB = b.tenKhoaHoc.toLowerCase().trim();
                if (courseA > courseB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ["descend"],
            width: "20%",
        },

        {
            title: "Hình Ảnh",
            dataIndex: "hinhAnh",
            render: (text, course, index) => {
                return (
                    <Fragment>
                        <img
                            className="rounded-md"
                            src={course.hinhAnh}
                            alt={course.tenKhoaHoc}
                            width="100"
                            height="100"
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = `https://picsum.photos/id/${index}/100/100`;
                            }}
                        />
                    </Fragment>
                );
            },
            width: "5%",
        },
        {
            title: 'MÔ TẢ',
            dataIndex: 'moTa',
            key: 'moTa',
            render: (text, course) => {
                return (
                    <Fragment>
                        {course.moTa.length > 100
                            ? course.moTa.slice(0, 100) + "..."
                            : course.moTa}
                    </Fragment>
                );
            },
            width: "25%",
        },
        {
            title: "Khoá học",
            dataIndex: "danhMucKhoaHoc.tenDanhMucKhoaHoc",
            render: (text, course) => {
                return <Fragment>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</Fragment>;
            },
            sorter: (a, b) => {
                let danhMucA = a.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
                let danhMucB = b.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
                if (danhMucA > danhMucB) {
                    return 1;
                }
                return -1;
            },
            width: "15%",
        },
        {
            title: 'NGƯỜI TẠO',
            dataIndex: 'nguoiTao.taiKhoan',
            key: 'taiKhoanNguoiTao',
            render: (text, course) => {
                return <Fragment>{course.nguoiTao.taiKhoan}</Fragment>;
            },
            sorter: (a, b) => {
                let nguoiTaoA = a.nguoiTao.taiKhoan.toLowerCase().trim();
                let nguoiTaoB = b.nguoiTao.taiKhoan.toLowerCase().trim();
                if (nguoiTaoA > nguoiTaoB) {
                    return 1;
                }
                return -1;
            },
            width: "10%",
        },
        {
            title: 'Action',
            dataIndex: 'action',
            // key: 'operation',
            // fixed: 'right',
            render: (text, course) => {
                return (
                    <Fragment>
                        <NavLink key={1} className="mr-2 text-base success" to={`/admin/course/editcourse/${course.maKhoaHoc}`}><EditOutlined /></NavLink>
                        <span style={{ cursor: 'pointer' }} key={2} className=" mr-2 text-base" onClick={() => {
                            if (window.confirm('Bạn có chắc muốn xoá khóa học ' + course.tenKhoaHoc)) {
                                //Gọi action
                                dispatch(deleteCourseAction(course.tenKhoaHoc));
                            }


                        }}><DeleteOutlined style={{ color: 'red' }} /> </span>
                        <Button
                            onClick={() => {
                                getCourseKey(course.maKhoaHoc);
                            }}
                        >
                            <HighlightOutlined />
                        </Button>
                    </Fragment>
                );
            }

        },
    ];
    const data = listCourseShowing;



    const onSearch = value => {

        console.log(value);
        dispatch(getListCourseAction(value));

    };

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            <h3 className="text-4xl">Quản lý khóa học</h3>
            <Button className="mb-5 bg-danger" onClick={() => {
                history.push('/admin/course/newcourse');
            }}>Thêm khóa học</Button>
            <Search
                className="mb-5"
                placeholder="Mã khóa học, tên khóa học, ..."
                enterButton={<SearchOutlined />}
                size="large"

                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maKhoaHoc"} />
        </div>
    )
}