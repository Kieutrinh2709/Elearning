import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Table, Button, Input } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    SearchOutlined
} from '@ant-design/icons';
import FormUser from './FormUser/FormUser';
import { deleteUserAction, getListUserAction, searchUserAction } from '../../../redux/actions/UserAction';
import { useEffect } from 'react';
const { Search } = Input;
export default function ListUser(props) {


    const { listSearchUser } = useSelector(state => state.UserReducer);

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
            title: 'TÀI KHOẢN',
            width: 100,
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },
        {
            title: 'HỌ TÊN',
            width: 150,
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'SĐT',
            dataIndex: 'soDt',
            key: 'soDt',
            width: 100,
        },
        // {
        //     title: 'MẬT KHẨU',
        //     dataIndex: 'matKhau',
        //     key: 'matKhau',
        //     width: 100,
        // },
        {
            title: 'MÃ LOẠI NGƯỜI DÙNG',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            width: 90,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, user, index) => (
                <>
                    <Button className="btnAdminP" type="primary" onClick={() => {
                        setTypeAction('update');
                        setUserUpdate(user);
                        setShowForm(true);
                    }} ><EditOutlined /></Button>
                    <Button className="btnAdminP" onClick={() => {
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
                    }} type="primary" danger ><DeleteOutlined /></Button>
                </>
            ),
        },
    ];
    const data = listSearchUser;



    const onSearch = value => {

        console.log(value);
        dispatch(searchUserAction(value));

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

            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"taiKhoan"} />
            <FormUser show={showForm} close={handleCloseForm} userUpdate={userUpdate} type={typeAction} />
        </div>
    )
}