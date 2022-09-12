import axios from 'axios';
import { history } from '../../App';
import { GET_KEY_COURSE, LOGIN } from './type/UserType';
import Swal from 'sweetalert2'
import {  TOKEN, TYPE_USER, USER_LOGIN } from '../../util/setting';

export const loginAction = (userLogin) => { //userLogin : {taiKhoan:'',matKhau:''}

    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin //{taiKhoan:'',matKhau:''}
            });

            console.log('result', result.data)
            dispatch({
                type: LOGIN,
                userName: result.data.taiKhoan,
                userType: result.data.maLoaiNguoiDung

            })
            localStorage.setItem(TOKEN, result.data.accessToken);

            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));

            localStorage.setItem(TYPE_USER, JSON.stringify(result.data.maLoaiNguoiDung))

            if (result.data.maLoaiNguoiDung == 'GV') {
                history.push('/admin');
            } else {
                // props.history.push()
                history.goBack();
            }


        } catch (errors) {
            Swal.fire({
                icon: 'error',
                title: errors.response.data,
            })
        }
    }
}
export const registerAction = (user) => {

    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: user
            });
            if (result.status === 200) {
                Swal.fire({
                    title: 'Đăng ký thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        history.push("/login");
                    }
                })

            }

        } catch (errors) {
            Swal.fire({
                title: 'Đăng ký thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}
export const getListUserAction = (userLogin) => { 

    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}',
                method: 'GET',
                data: userLogin
            });
            dispatch({
                type: 'GET_LIST_USER',
                listUser: result.data
            })

        } catch (errors) {
            Swal.fire({
                icon: 'error',
                title: errors.response.data,
            })
        }
    }
}

export const getDetailUserAction = (taiKhoan) => {
    console.log('taiKhoan', taiKhoan);
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
                method: 'POST',
                data: taiKhoan
            });
            dispatch({
                type: 'GET_DETAIL_USER',
                detailUser: result.data
            })

        } catch (errors) {
            console.log('errors', errors);
        }
    }
}


export const insertUserAction = (thongTinUser) => { //userLogin : {taiKhoan:'',matKhau:''}
    thongTinUser.maNhom = 'GP01';
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method: 'POST',
                data: thongTinUser,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            if (result.status === 200) {
                Swal.fire({
                    title: 'Thêm thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(getListUserAction())
                    }
                })

            }

        } catch (errors) {
            Swal.fire({
                title: 'Thêm thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}
export const updateUserAction = (userUpdate) => {
    userUpdate.maNhom = 'GP01';
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: 'PUT',
                data: userUpdate,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Cập nhật thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(getListUserAction())
                    }
                })

            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Cập nhật thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}

export const deleteUserAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Xóa thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(getListUserAction())
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Xóa thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}
export const  getListUserSelectorAction= (keyCourse) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',
                method: 'POST',
                data: keyCourse
            });
            dispatch({
                type: 'GET_USER_SELECTOR',
                listUserSelector: result.data
            })

        } catch (errors) {
            console.log('errors', errors);
        }
    }   
};
export const  getListUserWaitingAction= (keyCourse) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
                method: 'POST',
                data: keyCourse
            });
            dispatch({
                type: 'GET_USER_WAITING',
                listUserWaiting: result.data
            })

        } catch (errors) {
            console.log('errors', errors);
        }
    }   
};
export const  getListUserJoinedAction= (keyCourse) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',
                method: 'POST',
                data: keyCourse
            });
            dispatch({
                type: 'GET_USER_JOINED',
                listUserJoined: result.data
            })

        } catch (errors) {
            console.log('errors', errors);
        }
    }   
};
export const getKeyCourseAction = (courseCode) => {
    return {
      type: GET_KEY_COURSE,
      payload: courseCode,
    };
};
