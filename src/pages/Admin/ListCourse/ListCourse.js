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
const { Search } = Input;

export default function ListCourse(props) {
    const [typeAction, setTypeAction] = useState('update');
    const dispatch = useDispatch();
    const [courseUpdate, setCourseUpdate] = useState({ courseUpdate: [] });
    const [showForm, setShowForm] = useState(false);
    const handleCloseForm = () => setShowForm(false);


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
    const { listCourseShowing } = useSelector(state => state.CourseReducer);
    useEffect(() => {
        dispatch(getListCourseAction());

    }, [])
    const columns = [
        {
            title: 'MÃ KHÓA HỌC',
            width: 70,
            dataIndex: 'maKhoaHoc',
            key: 'maKhoaHoc',
        },
        {
            title: 'TÊN KHÓA HỌC',
            width: 100,
            dataIndex: 'tenKhoaHoc',
            key: 'tenKhoaHoc',
        },

        {
            title: 'HÌNH ẢNH',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            width: 150,
            render: text => <img style={{ width: '100px', height: '100px', borderRadius: '10px' }} src={text} />,
        },
        {
            title: 'MÔ TẢ',
            dataIndex: 'moTa',
            key: 'moTa',
            width: 350,
        },
        {
            title: 'NGƯỜI TẠO',
            dataIndex: 'taiKhoanNguoiTao',
            key: 'taiKhoanNguoiTao',
            width: 100,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: (text, course) => (
                <>
                    <NavLink key={1} className="mr-2 text-base success" to ={`/admin/course/editcourse/${course.maKhoaHoc}`}><EditOutlined /></NavLink>
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
                </>
            ),
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