import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Box, Button, Table } from '@mui/material';
import { getListUserJoinedAction, getListUserSelectorAction, getListUserWaitingAction } from '../../../redux/actions/UserAction';
import { deleteCourseAction } from '../../../redux/actions/CourseAction';
import CourseForm from './FormCourse/FormCourse';


export default function CourseTable(props) {
    const [typeAction, setTypeAction] = useState('update');
    const dispatch = useDispatch();
    const [course, setCourse] = useState({ course: [] });
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
    const columns = [
        {
            title: 'MÃ KHÓA HỌC',
            width: 70,
            fixed: 'left',
            dataIndex: 'maKhoaHoc',
            key: 'maKhoaHoc',
        },
        {
            title: 'TÊN KHÓA HỌC',
            width: 100,
            dataIndex: 'tenKhoaHoc',
            fixed: 'left',
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
            render: (text, course, index) => (
                <>
                    <Button key={index} className="btnAdminP" type="primary" onClick={() => {
                        setCourse(course);
                        setTypeAction('update');
                        setShowForm(true);
                    }}><EditIcon /></Button>
                    <Button onClick={() => {
                        Swal.fire({
                            title: `Bạn có chắc muốn xóa khóa học này !`,
                            text: course.tenKhoaHoc,
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#fb4226',
                            cancelButtonColor: 'rgb(167 167 167)',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteCourseAction(course.maKhoaHoc));
                            }
                        })
                    }} key={index + 10000} type="primary" className="btnAdminP" danger ><DeleteIcon /></Button>
                    <Button
                        onClick={() => {
                            getCourseKey(course.maKhoaHoc);
                        }}
                    >
                        <HowToRegIcon />
                    </Button>
                </>
            ),
        },
    ];
    return (
        <div>
            <Box>
                <Button type="primary" style={{ width: '100%', margin: '3px 0' }} danger onClick={() => {
                    setTypeAction('insert');
                    setShowForm(true);
                }} >
                    Thêm Khóa Học
                </Button>
            </Box>

            <Table
                columns={columns}
                dataSource={props.data}
                scroll={{ x: 300 }}
                bordered="true"
                sticky
            />
            <CourseForm show={showForm} close={handleCloseForm} course={course} type={typeAction} />
        </div>
    )
}