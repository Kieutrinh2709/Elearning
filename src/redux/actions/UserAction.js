import axios from 'axios';
import { history } from '../../App';
import { GET_KEY_COURSE, GET_LIST_USER, LOGIN, SEARCH_USER } from './type/UserType';
import Swal from 'sweetalert2'
import { TOKEN, TYPE_USER, USER_LOGIN } from '../../util/setting';
import { userService } from '../../services/UserService';

export const loginAction = (userLogin) => { //userLogin : {taiKhoan:'',matKhau:''}

    return async (dispatch) => {
        try {
            const result = await userService.login(userLogin);
            // if (result.data.maLoaiNguoiDung === "GV") {
            //     return (
            //       dispatch({
            //         type: LOGIN,
            //         userLogin: result.data
            //       }),
            //       localStorage.setItem("GV", JSON.stringify(result.data)),
            //       setTimeout(() => {
            //         history.replace("/admin");
            //       }, 1000)
            //     );
            //   }
            //   dispatch({
            //     type: LOGIN,
            //     userLogin: result.data
            //   }),
            //   localStorage.setItem("HV", JSON.stringify(result.data));
            //   setTimeout(() => {
            //     history.replace("/");
            //   }, 1000);
            // } catch(errors) {
            //     console.log('errors', errors)

            // };

            if (result.status === 200) {
                dispatch({
                    type: LOGIN,
                    userLogin: result.data
                });
                localStorage.setItem(TOKEN, result.data.accessToken);

                localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));

                localStorage.setItem(TYPE_USER, JSON.stringify(result.data.maLoaiNguoiDung))

                if (result.data.maLoaiNguoiDung == 'GV') {
                    history.push('/admin');
                } else {
                    // props.history.push()
                    history.goBack();
                }
            }
        } catch (errors) {
            Swal.fire({
                icon: 'error',
                title: errors.response.data,
            })
        }
    }
}

export const registerAction = (userRegister) => {

    return async (dispatch) => {
        try {
            const result = await userService.register(userRegister);
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
export const getListUserAction = (taiKhoan = "") => {

    return async (dispatch) => {
        try {
            const result = await userService.getListUser(taiKhoan);

            dispatch({
                type: GET_LIST_USER,
                listUser: result.data.content
            })

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}

export const getDetailUserAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await userService.getDetailUser(userLogin);
            dispatch({
                type: 'GET_DETAIL_USER',
                detailUser: result.data.content
            })

        } catch (errors) {
            console.log('errors', errors);
        }
    }
}


export const insertUserAction = (userInfor) => { //userLogin : {taiKhoan:'',matKhau:''}
    userInfor.maNhom = 'GP01';
    return async (dispatch) => {
        try {
            const result = await userService.insertUser(userInfor);
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
            let result = await userService.updateUser(userUpdate);
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
            let result = await userService.deleteUser(taiKhoan);
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
export const searchUserAction = (tuKhoa ='')=>{

    return async(dispatch)=>{
        try {
            const result = await userService.searchUser(tuKhoa);

            dispatch({
                type:SEARCH_USER,
                listSearchUser:result.data.content
            })
        }catch(errors){
            console.log('errors', errors)
        }
    };
}
export const getListUserSelectorAction = (keyCourse) => {
    return async (dispatch) => {
        try {
            const result = await userService.getListUserSelector(keyCourse);
            dispatch({
                type: 'GET_USER_SELECTOR',
                listUserSelector: result.data
            })

        } catch (errors) {
            console.log('errors', errors);
        }
    }
};
export const getListUserWaitingAction = (keyCourse) => {
    return async (dispatch) => {
        try {
            const result = await userService.getListUserWaiting(keyCourse);
            dispatch({
                type: 'GET_USER_WAITING',
                listUserWaiting: result.data
            })

        } catch (errors) {
            console.log('errors', errors);
        }
    }
};
export const getListUserJoinedAction = (keyCourse) => {
    return async (dispatch) => {
        try {
            const result = await userService.getListUserJoined(keyCourse);
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
