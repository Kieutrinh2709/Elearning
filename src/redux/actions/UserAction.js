import axios from 'axios';
import { history } from '../../App';
import { CANCEL_COURSE_FAILED, CANCEL_COURSE_REQUEST, CANCEL_COURSE_SUCCESS, GETKEYWORD, GET_USERINFO_REQUEST, LOGIN, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, ONSUBMIT_FAILED, ONSUBMIT_REQUEST, ONSUBMIT_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_PROFILE_FAILED, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from './type/UserType';
import Swal from 'sweetalert2'
import { GROUP_ID, TOKEN, TYPE_USER, USER_LOGIN } from '../../util/setting';
import https from '../../services/baseService';
import { ADMIN_REGISTER_COURSE_FAILED, ADMIN_REGISTER_COURSE_REQUEST, ADMIN_REGISTER_COURSE_SUCCESS, GET_CODECOURSE, USER_JOINED_FAILED, USER_JOINED_REQUEST, USER_JOINED_SUCCESS, USER_SELECTOR_FAILED, USER_SELECTOR_REQUEST, USER_SELECTOR_SUCCESS, USER_WAITING_FAILED, USER_WAITING_REQUEST, USER_WAITING_SUCCESS } from './type/CourseType';

export const actLogin = (account) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        https
            .post("QuanLyNguoiDung/DangNhap", account)
            .then((result) => {
                if (result.data.maLoaiNguoiDung === "GV") {
                    return (
                        dispatch(actLoginSuccess(result.data)),
                        localStorage.setItem("GV", JSON.stringify(result.data)),
                        setTimeout(() => {
                            history.push("/dashboard");
                        }, 1000)
                    );
                }
                dispatch(actLoginSuccess(result.data));
                localStorage.setItem("HV", JSON.stringify(result.data));
                setTimeout(() => {
                    history.push("/");
                }, 1000);
            })
            .catch((error) => {
                dispatch(actLoginFailed(error));
            });
    };
};

const actLoginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

const actLoginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
};

const actLoginFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        payload: error,
    };
};

export const registerAction = (user) => {

    return (dispatch) => {
        dispatch(actRegisterRequest());
        https
            .post("QuanLyNguoiDung/DangKy", user)
            .then((result) => {
                dispatch(actRegisterSuccess(result.data));
                history.push("/login");
            })
            .catch((err) => {
                dispatch(actRegisterFailed(err));
            });
    };
}
const actRegisterRequest = () => {
    return {
        type: REGISTER_REQUEST,
    };
};

const actRegisterSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    };
};

const actRegisterFailed = (err) => {
    return {
        type: REGISTER_FAILED,
        payload: err,
    };
};
export const actGetUser = () => {
    return (dispatch) => {
        dispatch(actGetUserRequest());
        https
            .get(
                `QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=1&pageSize=100`
            )
            .then((result) => {
                dispatch(actGetUserSuccess(result.data));
            })
            .catch((err) => {
                dispatch(actGetUserFailed(err));
            });
    };
};

export const actGetAllUser = () => {
    return (dispatch) => {
        dispatch(actGetUserRequest());

        https
            .get(
                `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?&MaNhom=${GROUP_ID}`
            )
            .then((result) => {
                dispatch(actGetUserSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actGetUserFailed(error));
            });
    };
};

const actGetUserRequest = () => {
    return {
        type: USER_LIST_REQUEST,
    };
};
const actGetUserSuccess = (data) => {
    return {
        type: USER_LIST_SUCCESS,
        payload: data,
    };
};
const actGetUserFailed = (err) => {
    return {
        type: USER_LIST_FAILED,
        payload: err,
    };
};

// actAddUser
export const actAddUser = (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequest());
        https
            .post("QuanLyNguoiDung/ThemNguoiDung", user)
            .then((result) => {
                dispatch(actAddUserSuccess(result.data));
                console.log(result.data);
                alert("Thêm thành công!");
                // Load lại data sau khi thêm
                dispatch(actGetUser());
            })
            .catch((error) => {
                console.log(error.response.data);
                dispatch(actAddUserFailed(error));
            });
    };
};
const actAddUserRequest = () => {
    return {
        type: ONSUBMIT_REQUEST,
    };
};
const actAddUserSuccess = (data) => {
    return {
        type: ONSUBMIT_SUCCESS,
        payload: data,
    };
};
const actAddUserFailed = (error) => {
    return {
        type: ONSUBMIT_FAILED,
        payload: error,
    };
};

// actDeleteUSer
export const actDeleteUser = (taiKhoan) => {
    return (dispatch) => {
        https
            .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
            .then((result) => {
                alert(result.data);
                dispatch(actGetUser());
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };
};

// actUserInfo
export const actGetUserInfo = (user) => {
    return {
        type: GET_USERINFO_REQUEST,
        payload: user,
    };
};

// actUpdateUser
export const actUpdateUser = (user) => {
    return (dispatch) => {
        dispatch(actUpdateUserRequest());
        https
            .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user)
            .then((result) => {
                alert("Cap Nhat Thanh Cong");
                console.log("result", result.data);
                dispatch(actUpdateUserSuccess(result.data));
            })
            .catch((err) => {
                console.log("err", err.response);
                dispatch(actUpdateUserFailed(err.response?.data));
            });
    };
};
const actUpdateUserRequest = () => {
    return {
        type: ONSUBMIT_REQUEST,
    };
};
const actUpdateUserSuccess = (data) => {
    return {
        type: ONSUBMIT_SUCCESS,
        payload: data,
    };
};
const actUpdateUserFailed = (error) => {
    return {
        type: ONSUBMIT_FAILED,
        payload: error,
    };
};

// actGetKeyword
export const actGetKeyword = (keyword) => {
    return {
        type: GETKEYWORD,
        payload: keyword,
    };
};
export const actFetchUserSelector = (codeCourse) => {
    return (dispatch) => {
        dispatch(actUserSelectorRequest());
        https
            .post("QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh", codeCourse)
            .then((result) => {
                dispatch(actUserSelectorSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserSelectorFailed(error));
            });
    };
};
const actUserSelectorRequest = () => {
    return {
        type: USER_SELECTOR_REQUEST,
    };
};
const actUserSelectorSuccess = (data) => {
    return {
        type: USER_SELECTOR_SUCCESS,
        payload: data,
    };
};
const actUserSelectorFailed = (error) => {
    return {
        type: USER_SELECTOR_FAILED,
        payload: error,
    };
};

// action fetch list user waiting
export const actFetchUserWaiting = (codeCourse) => {
    return (dispatch) => {
        dispatch(actUserWaitingRequest());
        https
            .post("QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", codeCourse)
            .then((result) => {
                dispatch(actUserWaitingSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserWaitingFailed(error));
            });
    };
};
const actUserWaitingRequest = () => {
    return {
        type: USER_WAITING_REQUEST,
    };
};
const actUserWaitingSuccess = (data) => {
    return {
        type: USER_WAITING_SUCCESS,
        payload: data,
    };
};
const actUserWaitingFailed = (error) => {
    return {
        type: USER_WAITING_FAILED,
        payload: error,
    };
};


// action fetch list user Joined
export const actFetchUserJoined = (codeCourse) => {
    return (dispatch) => {
        dispatch(actUserJoinedRequest());
        https
            .post("QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", codeCourse)
            .then((result) => {
                dispatch(actUserJoinedSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserJoinedFailed(error));
            });
    };
};
const actUserJoinedRequest = () => {
    return {
        type: USER_JOINED_REQUEST,
    };
};
const actUserJoinedSuccess = (data) => {
    return {
        type: USER_JOINED_SUCCESS,
        payload: data,
    };
};
const actUserJoinedFailed = (error) => {
    return {
        type: USER_JOINED_FAILED,
        payload: error,
    };
};

// get code course
export const actGetCodeCourse = (courseCode) => {
    return {
        type: GET_CODECOURSE,
        payload: courseCode,
    };
};


// action register course
export const actAdminRegisterCourse = (courseInfo) => {
    return (dispatch) => {
        dispatch(actAdminRegisterCourseRequest());
        https
            .post("QuanLyKhoaHoc/GhiDanhKhoaHoc", courseInfo)
            .then((result) => {
                dispatch(actAdminRegisterCourseSuccess(result.data));
                alert('Xác nhận thành công!')
            })
            .catch((error) => {
                dispatch(actAdminRegisterCourseFailed(error));
                console.log(error);
            });
    };
};
const actAdminRegisterCourseRequest = () => {
    return {
        type: ADMIN_REGISTER_COURSE_REQUEST,
    };
};
const actAdminRegisterCourseSuccess = (data) => {
    return {
        type: ADMIN_REGISTER_COURSE_SUCCESS,
        payload: data,
    };
};
const actAdminRegisterCourseFailed = (error) => {
    return {
        type: ADMIN_REGISTER_COURSE_FAILED,
        payload: error,
    };
};
export const actUserProfile = (account) => {
    return (dispatch) => {
        dispatch(actUserProfileRequest());
        https
            .post("QuanLyNguoiDung/ThongTinTaiKhoan", account)
            .then((result) => {
                dispatch(actUserProfileSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserProfileFailed(error));
            });
    };
};
const actUserProfileRequest = () => {
    return {
        type: USER_PROFILE_REQUEST,
    };
};
const actUserProfileSuccess = (data) => {
    return {
        type: USER_PROFILE_SUCCESS,
        payload: data,
    };
};
const actUserProfileFailed = (error) => {
    return {
        type: USER_PROFILE_FAILED,
        payload: error,
    };
};

// update Profile
export const actUpdateProfile = (user) => {
    return (dispatch) => {
        dispatch(actUpdateProfileRequest());
        https
            .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
            .then((result) => {
                dispatch(actUpdateProfileSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUpdateProfileFailed(error));
            });
    };
};
const actUpdateProfileRequest = () => {
    return {
        type: UPDATE_PROFILE_REQUEST,
    };
};
const actUpdateProfileSuccess = (data) => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: data,
    };
};
const actUpdateProfileFailed = (error) => {
    return {
        type: UPDATE_PROFILE_FAILED,
        payload: error,
    };
};

// Cancel course
export const actCancelCourse = (courseInfo) => {
    return (dispatch) => {
        dispatch(actCancelCourseRequest());
        https
            .post("QuanLyKhoaHoc/HuyGhiDanh", courseInfo)
            .then((result) => {
                dispatch(actCancelCourseSuccess(result.data));
                alert(result.data);
                dispatch(actUserProfile(courseInfo.taiKhoan));
            })
            .catch((error) => {
                dispatch(actCancelCourseFailed(error));
            });
    };
};
const actCancelCourseRequest = () => {
    return {
        type: CANCEL_COURSE_REQUEST,
    };
};
const actCancelCourseSuccess = (data) => {
    return {
        type: CANCEL_COURSE_SUCCESS,
        payload: data,
    };
};
const actCancelCourseFailed = (error) => {
    return {
        type: CANCEL_COURSE_FAILED,
        payload: error,
    };
};


