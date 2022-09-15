import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Table, Button, Input } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    SearchOutlined
} from '@ant-design/icons';
import FormUser from './FormUser/FormUser';
import { deleteUserAction, getListUserAction } from '../../../redux/actions/UserAction';
import { useEffect } from 'react';
import { Fragment } from 'react';
export default function ListUser(props) {

    const { Search } = Input;
    const { listUser } = useSelector((state) => state.UserReducer);
    const [showForm, setShowForm] = useState(false);
    const [userUpdate, setUserUpdate] = useState({ userUpdate: [] });
    const [typeAction, setTypeAction] = useState('update');
    const handleCloseForm = () => setShowForm(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListUserAction());

    }, []);
    const columns = [
        {
            title: "Tài khoản",
            dataIndex: "taiKhoan",
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA > taiKhoanB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        {
            title: "Họ Tên",
            dataIndex: "hoTen",
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA > hoTenB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ["descend", 'ascend'],
            width: "20%",
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => {
                let emailA = a.email.toLowerCase().trim();
                let emailB = b.email.toLowerCase().trim();
                if (emailA > emailB) {
                    return 1;
                }
                return -1;
            },

            sortDirections: ['descend', 'ascend'],
            width: '20%'
        },
        {
            title: "Điện thoại",
            dataIndex: "soDt",
            width: "15%",
        },
        {
            title: "Mã người dùng",
            dataIndex: "maLoaiNguoiDung",
            key: 'maLoaiNguoiDung',
            width: "15%",
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, user) => {
                return (
                    <Fragment>
                        <span className="btnAdminP" type="primary" onClick={() => {
                            setTypeAction('update');
                            setUserUpdate(user);
                            setShowForm(true);
                        }} ><EditOutlined /></span>
                        <span className="btnAdminP" onClick={() => {
                            Swal.fire({
                                title: `Bạn có chắc muốn xóa người dùng!`,
                                text: user.taiKhoan,
                                icon: 'question',
                                showCancelButton: true,
                                confirmButtonColor: '#fb4226',
                                cancelButtonColor: 'rgb(167 167 167)',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(deleteUserAction(user.taiKhoan));
                                }
                            })
                        }} type="primary" danger ><DeleteOutlined /></span>
                    </Fragment>
                );
            },
        },
    ];
    const data = listUser;

    const onSearch = (value) => {

        console.log(value);
        dispatch(getListUserAction(value));

    };

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <h3 className="text-4xl">Quản lý người dùng</h3>
            <Button className="mb-5 bg-danger" onClick={() => {
                setTypeAction('insert');
                setShowForm(true);
            }}>Thêm người dùng</Button>
            <Search
                className="mb-5"
                placeholder="Họ tên,..."
                enterButton={<SearchOutlined />}
                size="large"

                onSearch={onSearch}
            />

            <Table columns={columns} dataSource={data} enterButton={<SearchOutlined />} onChange={onChange} rowKey={"taiKhoan"} />
            <FormUser show={showForm} close={handleCloseForm} userUpdate={userUpdate} type={typeAction} />
        </div>
    )
}